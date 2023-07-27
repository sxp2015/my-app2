from django.db import models
from DjangoUeditor.models import UEditorField
import django.utils.timezone as timezone


class MyNew(models.Model):
    NEWS_CHOICES = (
        ('行业新闻', '行业新闻'),
        ('公司新闻', '公司新闻'),
    )
    title = models.CharField(max_length=50, verbose_name='新闻标题')
    newType = models.CharField(choices=NEWS_CHOICES,
                               max_length=50,
                               verbose_name='新闻类型')
    img = models.ImageField(verbose_name='缩略图',
                            upload_to='Award/',
                            blank=True)  # 新闻图片
    content = UEditorField(verbose_name='内容',
                           width=700,
                           height=400,
                           toolbars='full',
                           imagePath='ueditor/images/',
                           filePath='ueditor/files/',
                           upload_settings={'iamgesMaxSizing': 1024000},
                           default='')
    publishDate = models.DateTimeField(max_length=20,
                                       default=timezone.now,
                                       verbose_name='发布时间')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-publishDate']
        verbose_name = '新闻'
        verbose_name_plural = verbose_name
