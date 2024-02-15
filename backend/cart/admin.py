from django.contrib import admin

from cart.models import Cart, CartItem


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['user', 'get_items_display']

    def get_items_display(self, obj):
        return ', '.join([f"{item.product.title} ({item.quantity})" for item in obj.items.all()])

    get_items_display.short_description = 'Товары в корзине'


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ['product', 'quantity']
