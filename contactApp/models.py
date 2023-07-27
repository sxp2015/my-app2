from django.db import models
from DjangoUeditor.models import UEditorField

# Create your models here.
# 联系我们
from django.utils import timezone


class Contact(models.Model):
    title = models.TextField(max_length=50, blank=True, null=True, verbose_name="联系我们中文") #联系我们中文
    title_en = models.TextField(max_length=50, blank=True, null=True, verbose_name="联系我们英文")  # 联系我们英文
    photo = models.ImageField(upload_to='Award/', blank=True, verbose_name="联系我们广告图") #联系我们广告图片
    class Meta:
        verbose_name="联系我们"
        verbose_name_plural="联系我们"

# 联系方式
class ContactMethod(models.Model):
    title = models.TextField(max_length=500, blank=True, null=True, verbose_name="公司名字") #公司名字
    tel = models.TextField(max_length=500, blank=True, null=True, verbose_name="联系电话") #联系电话
    tel1 = models.TextField(max_length=500, blank=True, null=True, verbose_name="技术部联系电话")  # 技术部联系电话
    tel2 = models.TextField(max_length=500, blank=True, null=True, verbose_name="24小时服务电话")  # 24小时服务电话
    qq1 = models.TextField(max_length=500, blank=True, null=True, verbose_name="技术部QQ") # 技术部QQ
    qq2 = models.TextField(max_length=500, blank=True, null=True, verbose_name="销售QQ")  # 销售QQ
    email = models.TextField(max_length=500, blank=True, null=True, verbose_name="企业邮箱")  # 企业邮箱
    url = models.TextField(max_length=500, blank=True, null=True, verbose_name="网址")  # 网址
    address = models.TextField(max_length=500, blank=True, null=True, verbose_name="企业地址")  # 企业地址
    class Meta:
        verbose_name="联系方式"
        verbose_name_plural="联系方式"



# 人才理念
class TalentConcept(models.Model):
    title = models.TextField(max_length=500, blank=True, null=True, verbose_name="人才理念")  # 人才理念

    name1 = models.TextField(max_length=500, blank=True, null=True, verbose_name="用人原则")  # 用人原则
    title1 = models.TextField(max_length=500, blank=True, null=True, verbose_name="用人原则简介")  # 用人原则
    photo1 = models.ImageField(upload_to='Award/', blank=True, verbose_name="缩略图")  # 用人原则图片

    name2 = models.TextField(max_length=500, blank=True, null=True, verbose_name="育人原则")  # 育人原则
    title2 = models.TextField(max_length=500, blank=True, null=True, verbose_name="育人原则简介")  # 育人原则
    photo2 = models.ImageField(upload_to='Award/', blank=True, verbose_name="缩略图")  # 育人原则图片

    name3 = models.TextField(max_length=500, blank=True, null=True, verbose_name="留人原则")  # 留人原则
    title3 = models.TextField(max_length=500, blank=True, null=True, verbose_name="留人原则简介")  # 留人原则
    photo3 = models.ImageField(upload_to='Award/', blank=True, verbose_name="缩略图")  # 留人原则图片

    class Meta:
        verbose_name="人才理念"
        verbose_name_plural="人才理念"



# 加入我们
class AddUsAdmin(models.Model):
    jobname = models.TextField(max_length=500, blank=True, null=True, verbose_name="职位名称")  # 职位名称
    address = models.TextField(max_length=500, blank=True, null=True, verbose_name="工作地址")  # 工作地址
    publishDate = models.DateTimeField(max_length=20,
                                       default=timezone.now,
                                       verbose_name="发布时间"
                                       )
    content =UEditorField(verbose_name='职位详情',
                          width=700,
                          height=400,
                          toolbars='full',
                          imagePath='ueditor/images/',
                          filePath='ueditor/files/',
                          upload_settings={'iamgesMaxSizing':1024000},
                          default=''
                          )
    class Meta:
        verbose_name="加入我们"
        verbose_name_plural="加入我们"