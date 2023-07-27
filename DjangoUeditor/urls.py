# -*- coding: utf-8 -*-
import django
from .views import get_ueditor_controller

DJANGO_VERSION = django.VERSION[:5]

if DJANGO_VERSION >= (1, 8):
    from django.urls import re_path

    urlpatterns = [
        re_path(r'^controller/$', get_ueditor_controller)
    ]

else:
    try:

        from django.urls import re_path
    except ImportError:
        from django.urls import  re_path

    urlpatterns = re_path(r'^controller/$', get_ueditor_controller)

