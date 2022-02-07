from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404, render
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import Product, Cart
from .serializers import ProductSerializer, CartSerializer
from rest_framework import serializers
from django.core.exceptions import ValidationError
from .utils import get_cart_by_pk
import stripe
from .constants import STRIPE_PUBLIC_KEY, STRIPE_PRIVATE_KEY
# Create your views here.
stripe.api_key = STRIPE_PRIVATE_KEY

class ProductList(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get(self, request, format=None):
        # Get Url-Queryparameters
        search_param = request.GET.get("search")
        bestseller_filter = request.GET.get("bestseller")

        # Query/Filter Products
        products = Product.objects.all()
        if search_param: # IMPROVEMENT: maybe create tag field for each product and also lookup there?
            products = products.filter(name__icontains=search_param)
        if bestseller_filter:
            is_bestseller = bestseller_filter.upper() == "TRUE" or (bestseller_filter.isdigit() and int(bestseller_filter) == 1)
            products = products.filter(is_bestseller=is_bestseller)
        
        # Serialize and Return
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.dat)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):   
        product = self.get_object(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    

class CartDetail(APIView):
    # richtige permissions adden dass nur der owner der cart actions machen kann

    def get_object(self, pk):
        try:
            return Cart.objects.get(pk=pk)
        except Cart.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        cart = self.get_object(pk)
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    


@api_view(["GET"])
def create_cart(request):
        cart = Cart.objects.create()
        # serializer = CartSerializer(cart)
        return Response({"id":cart.id}, status=status.HTTP_201_CREATED)

@api_view(["POST"])
def add_to_cart(request, pk=None):
    # dont filter after cart pk in production, rather select cart by request.user (also add user field in cartmodel)

    # create cart if no cart found

    if pk == None:
        cart = Cart.objects.create()
    try:
        cart = Cart.objects.get(pk=pk)
    except Cart.DoesNotExist:
        return Response({"detail": "cart does not exist"}, status=status.HTTP_400_BAD_REQUEST)
    except ValidationError as e:
        return Response({"detail": "invalid cart primary key"}, status=status.HTTP_400_BAD_REQUEST)


    for productData in request.data:
        try:
            product = Product.objects.get(pk=productData["id"])
        except Product.DoesNotExist:
            return Response({"detail": "product with id {} does not exist".format(productData["id"])}, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response({"detail": "error parsing product id"}, status=status.HTTP_400_BAD_REQUEST)
        cart.products.add(product)

    cart.save()
    cart_serializer = CartSerializer(cart)

    return Response(cart_serializer.data)

@api_view(["POST"])
def remove_from_cart(request, pk=None):
    # dont filter after cart pk in production, rather select cart by request.user (also add user field in cartmodel)

    # create cart if no cart found

    if pk == None:
        return Response({"detail": "no cart primary key provided"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        cart = Cart.objects.get(pk=pk)
    except Cart.DoesNotExist:
        return Response({"detail": "cart does not exist"}, status=status.HTTP_400_BAD_REQUEST)
    except ValidationError as e:
        return Response({"detail": "invalid cart primary key"}, status=status.HTTP_400_BAD_REQUEST)


    for productData in request.data:
        try:
            product = Product.objects.get(pk=productData["id"])
        except Product.DoesNotExist:
            return Response({"detail": "product with id {} does not exist".format(productData["id"])}, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response({"detail": "error parsing product id"}, status=status.HTTP_400_BAD_REQUEST)
        cart.products.remove(product)

    cart.save()
    cart_serializer = CartSerializer(cart)

    return Response(cart_serializer.data)

@api_view(["GET"])
def payment_sheet(request, pk, format=None):
    cart = get_cart_by_pk(pk, create_if_not_existing=False)

    cart_total_price_cents = int(cart.total_price*100)
    print(cart_total_price_cents)

    if cart.products.count() == 0:
        return Response({"detail":"cart is empty"})
    
    customer = stripe.Customer.create()

    ephemeralKey = stripe.EphemeralKey.create(
        customer=customer['id'],
        stripe_version='2020-08-27',
    )
    paymentIntent = stripe.PaymentIntent.create(
        amount=cart_total_price_cents,
        currency='eur',
        customer=customer['id'],
        payment_method_types=["bancontact", "card", "ideal", "klarna", "sepa_debit", "sofort"],
    )

    
    return Response({
        "paymentIntent":paymentIntent.client_secret,
        "ephemeralKey":ephemeralKey.secret,
        "customer":customer.id,
        "publishableKey":STRIPE_PUBLIC_KEY,
    })

@api_view(["GET"])
def get_stripe_public_key(request):
    return Response({"publishable_key":STRIPE_PUBLIC_KEY})