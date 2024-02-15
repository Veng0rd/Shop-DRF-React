from django.urls import path

from .views import AddToCartView, ViewCartView, DeleteCartItemView, UpdateCartItemView

urlpatterns = [
    path('api/v1/cart/add/', AddToCartView.as_view()),
    path('api/v1/cart/', ViewCartView.as_view()),
    path('api/v1/cart/<uuid:product_id>/', DeleteCartItemView.as_view()),
    path('api/v1/cart/update/', UpdateCartItemView.as_view()),
]
