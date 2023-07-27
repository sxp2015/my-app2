from django.db import models

# Create your models here.

class Banner(models.Model):
    description = models.TextField(max_length=500, blank=True, null=True, verbose_name="轮播图描述") #轮播图描述
    photo0 = models.ImageField(upload_to='Award/', blank=True, verbose_name="图片地址")# 图片地址

    class Meta:
        verbose_name="首页轮播图"
        verbose_name_plural="首页轮播图"