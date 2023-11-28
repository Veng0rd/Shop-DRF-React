from rest_framework import serializers

from .models import Category, Subcategory, Product, Group


class SubcategoryPreviewSerializer(serializers.ModelSerializer):
    """ Serializer to get a list of subcategories """

    class Meta:
        model = Subcategory
        fields = ('title', 'slug', 'image')


class CategorySerializer(serializers.ModelSerializer):
    subcategories = SubcategoryPreviewSerializer(many=True, read_only=True)

    class Meta:
        ordering = ['title']
        model = Category
        fields = ('title', 'image', 'subcategories')


class ProductsPreviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'feature', 'small_image', 'price', 'discount')


class GroupSerializer(serializers.ModelSerializer):
    products = ProductsPreviewSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = ('title', 'products')


class SubcategorySerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many=True, read_only=True)

    class Meta:
        model = Subcategory
        fields = ('title', 'groups')
