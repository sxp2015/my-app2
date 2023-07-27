from django.contrib import admin

from .models import Category, Goods
# Register your models here.
# 产品类型表
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'img', 'desc']


#产品表
class GoodsAdmin(admin.ModelAdmin):
    list_display = ['goods_name', 'goods_img', 'goods_desc', 'category']



admin.site.register(Category, CategoryAdmin)
admin.site.register(Goods, GoodsAdmin)
