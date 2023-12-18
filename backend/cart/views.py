from rest_framework import generics, status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from products.models import Product
from .models import CartItem, Cart
from .serializers import CartSerializer, CartItemSerializer


class ViewCartView(generics.RetrieveAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get_object(self):
        user = self.request.user

        cart, created = Cart.objects.get_or_create(user=user)
        return cart


class AddToCartView(generics.CreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

    def create(self, request, *args, **kwargs):
        user = self.request.user

        product_id = request.data.get('product')
        quantity = request.data.get('quantity', 1)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)

        cart_item, created = CartItem.objects.get_or_create(
            product=product,
            defaults={'quantity': quantity}
        )

        if not created:
            cart_item.quantity += int(quantity)
            cart_item.save()

        cart, created = Cart.objects.get_or_create(user=user)

        cart.items.add(cart_item)

        return Response({'status': 'success'}, status=status.HTTP_201_CREATED)


class UpdateCartItemView(generics.UpdateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

    def update(self, request, *args, **kwargs):
        user = self.request.user

        product_id = request.data.get('product')
        quantity = request.data.get('quantity', 1)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)

        cart = Cart.objects.get(user=user)

        try:
            cart_item = CartItem.objects.get(cart=cart, product=product)
        except CartItem.DoesNotExist:
            return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)

        cart_item.quantity = quantity
        cart_item.save()

        return Response({'status': 'success'}, status=status.HTTP_200_OK)


class DeleteCartItemView(generics.DestroyAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

    def delete(self, request, *args, **kwargs):
        user = self.request.user

        product_id = self.kwargs.get('product_id')

        product = get_object_or_404(Product, id=product_id)

        cart = Cart.objects.get(user=user)

        try:
            cart_item = CartItem.objects.get(cart=cart, product=product)
        except CartItem.DoesNotExist:
            return Response({'status': 'error'}, status=status.HTTP_404_NOT_FOUND)

        cart_item.delete()

        return Response({'status': 'success'}, status=status.HTTP_200_OK)
