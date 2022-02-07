
from django.forms import ValidationError
from django.http import Http404
from .models import Cart

def get_cart_by_pk(pk, create_if_not_existing=False):
    try:
        return Cart.objects.get(pk=pk)
    except Cart.DoesNotExist:
        if create_if_not_existing:
            return Cart.objects.create()
        else:
            raise Http404
    except Exception as e:
        raise ValidationError