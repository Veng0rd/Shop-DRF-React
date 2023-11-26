from django.contrib import admin
from .models import Category, Subcategory, Group, Product


@admin.register(Product)
class ProductsAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'price', 'group', 'small_image', 'large_image', 'nutritional_info', 'volume_or_weight', 'composition',
              'storage_conditions', 'storage_period', 'manufacturer']
    list_display = ['id', 'title', 'description', 'price']


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ['title', 'subcategory']
    list_display = ['title', 'subcategory']


@admin.register(Subcategory)
class SubcategoryAdmin(admin.ModelAdmin):
    fields = ['title', 'slug', 'category']
    list_display = ['title', 'slug', 'category']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = ['title', 'slug', 'image']
    list_display = ['title', 'slug']
