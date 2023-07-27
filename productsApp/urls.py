from django.urls import path
from . import views
app_name = 'productsApp'
urlpatterns = [
    path('product/', views.product, name='product'), # 产品中心
]
