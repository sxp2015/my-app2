from django.shortcuts import render
from .models import MyNew
from pyquery import PyQuery as pq
# Create your views here.
def news(request):
    news = MyNew.objects.all()
    for new in news:
        html = pq(new.content)
        new.content = pq(html).text()
    return render(request, 'news.html', {
        "news": news
    })