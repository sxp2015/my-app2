from django.contrib import admin
from .models import MyNew

# 公司新闻
class MyNewAdmin(admin.ModelAdmin):
    style_fields = {'content': 'ueditor'}

admin.site.register(MyNew, MyNewAdmin)