from rest_framework import serializers

from accounts.serializers import UserInfoSerializer
from .models import CartItem, Cart


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ('product', 'quantity')


class CartSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    items = CartItemSerializer(many=True)

    class Meta:
        model = Cart
        fields = ('user', 'items')
