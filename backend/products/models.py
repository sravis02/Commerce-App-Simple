from decimal import Decimal
from uuid import uuid4
from django.db import models
from django.core.validators import MinValueValidator
from .constants import TAX_RATE
# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500) # markdown
    image = models.ImageField(upload_to='product-images', null=True)
    color = models.CharField(max_length=50, blank=True)
    price = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    stock = models.IntegerField(null=False, validators=[MinValueValidator])
    is_bestseller = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    products = models.ManyToManyField(Product, blank=True)
    subtotal_price = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    shipping_price = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    tax_price = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    total_price = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    items_amount = models.IntegerField(default=0)

    def __str__(self):
        return str(self.id)
    
    def save(self, *args, **kwargs):

        subtotal_price = 0
        for product in self.products.all():
            print(product)
            subtotal_price += product.price
        
        self.subtotal_price = subtotal_price
        self.tax_price = self.subtotal_price * Decimal(TAX_RATE)
        self.total_price = self.subtotal_price  + self.tax_price + self.shipping_price

        super(Cart, self).save(*args, **kwargs)

