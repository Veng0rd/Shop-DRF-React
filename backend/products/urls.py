from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from .views import CategoryList, SubcategoryList, ProductsList

router = routers.DefaultRouter()
router.register(r'product', ProductsList, basename='product')

urlpatterns = [
    path('api/v1/category/', CategoryList.as_view()),
    path('api/v1/category/<slug:slug>/', SubcategoryList.as_view()),
    path('api/v1/', include(router.urls)),
]
