import uuid

from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255, unique=True, null=False, blank=False, verbose_name='Название категории')
    slug = models.CharField(max_length=255, unique=True, null=True, blank=True, verbose_name='Slug категории')
    image = models.ImageField(upload_to='img/category', default='img/category/default.jpg',
                              null=False, blank=True, verbose_name='Изображение категории')

    class Meta:
        db_table = 'category'
        verbose_name = 'Список категорий'
        verbose_name_plural = 'Список категорий'

    def __str__(self):
        return self.title


class Subcategory(models.Model):
    title = models.CharField(max_length=255, unique=True, null=False, blank=False, verbose_name='Название подкатегории')
    slug = models.CharField(max_length=255, unique=True, null=False, blank=False, verbose_name='Slug подкатегории')
    image = models.ImageField(upload_to='img/subcategory', default='img/subcategory/default.jpg',
                              null=False, blank=True, verbose_name='Изображение подкатегории')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')

    class Meta:
        db_table = 'subcategory'
        verbose_name = 'Список подкатегорий'
        verbose_name_plural = 'Список подкатегорий'

    def __str__(self):
        return self.title


class Group(models.Model):
    title = models.CharField(max_length=255, unique=True, null=False, blank=False, verbose_name='Название группы')
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE, related_name='groups')

    class Meta:
        db_table = 'group'
        verbose_name = 'Список групп'
        verbose_name_plural = 'Список групп'

    def __str__(self):
        return self.title


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, unique=True, null=False, blank=False, verbose_name='Название товара')
    feature = models.CharField(max_length=255, null=True, blank=True, verbose_name='Особенность товара')
    description = models.TextField(null=True, blank=True, verbose_name='Описание товара')
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='products', verbose_name='Группа товара')
    small_image = models.ImageField(upload_to='img/products/small', default='img/products/small/default.jpg',
                                    null=False, blank=True, verbose_name='Маленькое изображение товара')
    large_image = models.ImageField(upload_to='img/products/large', default='img/products/large/default.jpg',
                                    null=False, blank=True, verbose_name='Изображение товара')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')
    discount = models.IntegerField(verbose_name='Процент скидки', null=False, blank=True, default=0)

    # other
    calories = models.TextField(null=True, blank=True, verbose_name='Количество ккал')
    proteins = models.TextField(null=True, blank=True, verbose_name='Количество белка')
    fats = models.TextField(null=True, blank=True, verbose_name='Количество жиров')
    carbohydrates = models.TextField(null=True, blank=True, verbose_name='Количество углеводов')
    volume_or_weight = models.TextField(max_length=255, null=True, blank=True, verbose_name='Вес/объём')
    composition = models.TextField(null=True, blank=True, verbose_name='Состав')
    storage_period = models.TextField(null=True, blank=True, verbose_name='Срок хранения')
    storage_conditions = models.TextField(null=True, blank=True, verbose_name='Условия хранения')
    manufacturer = models.TextField(null=True, blank=True, verbose_name='Производитель')

    class Meta:
        db_table = 'products'
        verbose_name = 'Список товаров'
        verbose_name_plural = 'Список товаров'

    def __str__(self):
        return self.title
