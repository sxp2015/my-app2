from django.shortcuts import render


# Create your views here.
from productsApp.models import Goods, Category


def product(request):
    goods = Goods.objects.all()
    category = Category.objects.all()
    return render(request, 'product.html',{
        "goods": goods,
        "category":category
    })