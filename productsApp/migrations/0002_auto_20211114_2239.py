# Generated by Django 3.2.5 on 2021-11-14 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productsApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='desc',
            field=models.TextField(max_length=500, unique=True),
        ),
        migrations.AlterField(
            model_name='goods',
            name='goods_desc',
            field=models.TextField(max_length=500, unique=True),
        ),
    ]