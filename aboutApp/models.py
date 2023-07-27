from django.db import models


# Create your models here.

class Company(models.Model):
    description = models.TextField(max_length=500, blank=True, null=True, verbose_name='公司简介')  # 公司简介
    photo0 = models.ImageField(upload_to='Award/', blank=True, verbose_name='顶部广告图')  # 公司简介头部图片
    photo1 = models.ImageField(upload_to='Award/', blank=True, verbose_name='中间广告图')  # 公司简介中间图片
    missionvision = models.TextField(max_length=500, blank=True, null=True, verbose_name='使命与愿景')  # 使命与愿景

    class Meta:
        verbose_name = "关于我们"
        verbose_name_plural = "关于我们"


class DevelopmentHistory(models.Model):
    year = models.TextField(max_length=50, blank=True, null=True, verbose_name='年份')  # 年份
    description = models.TextField(max_length=500, blank=True, null=True, verbose_name='发展历程')  # 历程简介

    class Meta:
        verbose_name = "历程简介"
        verbose_name_plural = "历程简介"
