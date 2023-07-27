from django.db import models


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name="分类名称")  # 分类名
    img = models.ImageField(upload_to='Award/', blank=True, verbose_name="分类图片")  # 分类图片
    desc = models.TextField(max_length=500, unique=True, verbose_name="分类简介")  # 分类简介

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "产品分类"
        verbose_name_plural = "产品分类"


class Goods(models.Model):
    goods_name = models.CharField(max_length=100, unique=True, verbose_name="产品名称")  # 产品名称
    goods_img = models.ImageField(upload_to='Award/', blank=True, verbose_name="产品图片")  # 产品图片
    goods_file = models.FileField(upload_to='Award/', blank=True, verbose_name="产品手册")
    goods_desc = models.TextField(max_length=500, unique=True, verbose_name="产品简介")  # 产品简介
    category = models.ForeignKey("Category", on_delete=models.CASCADE, verbose_name="产品分类")

    class Meta:
        verbose_name = "产品详情"
        verbose_name_plural = "产品详情"
