from rest_framework import serializers
from .models import Product, Cart

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        optional_fields = ['name', 'description', 'price', 'stock', 'image']
    

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"
        depth = 2