from django.contrib import admin
from .models import Category, Subcategory, Group, Product


@admin.register(Product)
class ProductsAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'feature', 'price', 'discount', 'group', 'small_image', 'large_image', 'calories',
              'proteins', 'fats', 'carbohydrates', 'volume_or_weight', 'composition', 'storage_period',
              'storage_conditions', 'manufacturer']
    list_display = ['id', 'title', 'large_image', 'small_image', 'price']


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ['title', 'subcategory']
    list_display = ['title', 'subcategory']


@admin.register(Subcategory)
class SubcategoryAdmin(admin.ModelAdmin):
    fields = ['title', 'slug', 'category', 'image']
    list_display = ['title', 'slug', 'image', 'category']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = ['title', 'image']
    list_display = ['title', 'image']
