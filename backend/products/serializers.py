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
        fields = ('title', 'slug', 'image', 'subcategories')


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


class ProductsDetailSerializer(serializers.ModelSerializer):
    group = serializers.StringRelatedField()

    class Meta:
        model = Product
        exclude = ('small_image',)

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        nutrition_info = [
            {'name': field.verbose_name, 'gram': representation.get(field.name, None)} for field in Product._meta.fields
            if field.name in ['calories', 'proteins', 'fats', 'carbohydrates']
        ]

        additional_info = [
            {'name': field.verbose_name, 'info': representation.get(field.name, None)} for field in Product._meta.fields
            if field.name in ['composition', 'storage_period', 'storage_conditions', 'manufacturer']
        ]

        new_representation = {
            'title': representation['title'],
            'group': representation['group'],
            'volume_or_weight': representation['volume_or_weight'],
            'large_image': representation['large_image'],
            'feature': representation['feature'],
            'price': representation['price'],
            'discount': representation['discount'],
            'description': representation['description'],
            'in100grams': nutrition_info,
            'info': additional_info,
        }

        return new_representation


class ProductsSearchSerializer(serializers.ModelSerializer):
    group = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = ('id', 'group', 'title', 'feature', 'small_image', 'price', 'discount')
