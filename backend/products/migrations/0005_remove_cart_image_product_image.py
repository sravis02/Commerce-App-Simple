# Generated by Django 4.0.1 on 2022-02-02 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_cart_image_alter_product_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='image',
        ),
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]