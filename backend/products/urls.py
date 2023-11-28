from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from .views import CategoryList, SubcategoryList

urlpatterns = [
    path('api/v1/category/', CategoryList.as_view()),
    path('api/v1/category/<slug:slug>/', SubcategoryList.as_view()),
]
