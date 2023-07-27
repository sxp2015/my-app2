"""myApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from aboutApp.views import about
from homeApp.views import home
from contactApp.views import contact
from newsApp.views import news

urlpatterns = [
    path('ueditor/', include('DjangoUeditor.urls')), # 富文本编辑器
    path('admin/', admin.site.urls),
    path('', home, name='home'), # 首页
    path('productsApp/', include('productsApp.urls')), # 产品列表
    path('about', about, name='about'), #关于我们
    path('contact', contact, name='contact'), #联系我们
    path('news', news, name='news'), #新闻动态
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
