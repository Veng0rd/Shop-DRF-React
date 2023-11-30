from rest_framework import generics, viewsets, filters

from .models import Category, Product, Subcategory
from .serializers import CategorySerializer, SubcategorySerializer, ProductsDetailSerializer, ProductsSearchSerializer


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SubcategoryList(generics.RetrieveAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer
    lookup_field = 'slug'


class ProductsList(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = '__all__'
    search_fields = ['title']

    def get_serializer_class(self):
        if 'search' in self.request.query_params:
            return ProductsSearchSerializer
        return ProductsDetailSerializer
