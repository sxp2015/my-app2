from django.shortcuts import render

# Create your views here.
from aboutApp.models import Company
from homeApp.models import Banner
from productsApp.models import Category
from newsApp.models import MyNew
from pyquery import PyQuery as pq
def home(request):
    companys = Company.objects.all()
    banners = Banner.objects.all()
    category = Category.objects.all()
    news = MyNew.objects.all()[:4]
    for new in news:
        html = pq(new.content)
        new.content = pq(html).text()
    return render(request, 'index.html', {
        'companys': companys,
        'banners': banners,
        'category': category,
        'news': news,
    })
