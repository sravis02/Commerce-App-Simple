from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("products/", views.ProductList.as_view()),
    path("product/<int:pk>/", views.ProductDetail.as_view()),
    path("cart-add/<slug:pk>/", views.add_to_cart),
    path("cart-remove/<slug:pk>/", views.remove_from_cart),
    path("get-new-cart/", views.create_cart),
    path("cart-info/<slug:pk>/", views.CartDetail.as_view()),
    path("payment-sheet/<slug:pk>/", views.payment_sheet),
    path("stripe-public-key/", views.get_stripe_public_key),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,document_root=settings.STATIC_ROOT) 
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)