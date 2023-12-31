# Generated by Django 2.2.4 on 2022-03-03 02:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('productsApp', '0003_auto_20220101_1948'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': '产品分类', 'verbose_name_plural': '产品分类'},
        ),
        migrations.AlterModelOptions(
            name='goods',
            options={'verbose_name': '产品详情', 'verbose_name_plural': '产品详情'},
        ),
        migrations.AlterField(
            model_name='category',
            name='desc',
            field=models.TextField(max_length=500, unique=True, verbose_name='分类简介'),
        ),
        migrations.AlterField(
            model_name='category',
            name='img',
            field=models.ImageField(blank=True, upload_to='Award/', verbose_name='分类图片'),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=100, unique=True, verbose_name='分类名称'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productsApp.Category', verbose_name='产品分类'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='goods_desc',
            field=models.TextField(max_length=500, unique=True, verbose_name='产品简介'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='goods_img',
            field=models.ImageField(blank=True, upload_to='Award/', verbose_name='产品图片'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='goods_name',
            field=models.CharField(max_length=100, unique=True, verbose_name='产品名称'),
        ),
    ]
