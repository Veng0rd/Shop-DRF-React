from django.shortcuts import render, get_object_or_404
from rest_framework import generics

from .models import Category, Product, Subcategory
from .serializers import CategorySerializer, SubcategorySerializer, ProductsDetailSerializer


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SubcategoryList(generics.RetrieveAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer
    lookup_field = 'slug'


class ProductsDetailList(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductsDetailSerializer
