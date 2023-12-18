from django.db import models

from accounts.models import UserAccount
from products.models import Product


class Cart(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE, related_name='cart', verbose_name='Пользователь')
    items = models.ManyToManyField('CartItem', related_name='cart', blank=True, verbose_name='Товары в корзине')

    class Meta:
        db_table = 'carts'
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзина'

    def __str__(self):
        return f"Корзина пользователя {self.user.email}"


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items', verbose_name='Товар')
    quantity = models.PositiveIntegerField(default=1, verbose_name='Количество товара')

    class Meta:
        db_table = 'cart_items'
        verbose_name = 'Элемент корзины'
        verbose_name_plural = 'Элемент корзины'

    def __str__(self):
        return f"{self.product.title} - {self.quantity}"
