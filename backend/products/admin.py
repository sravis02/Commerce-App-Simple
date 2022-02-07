from django.contrib import admin

# Register your models here.
from django.contrib.sessions.models import Session
from products.models import Product, Cart

admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Session)