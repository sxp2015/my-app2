# Generated by Django 3.2.5 on 2021-11-13 03:16

import DjangoUeditor.models
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('contactApp', '0005_talentconcept'),
    ]

    operations = [
        migrations.CreateModel(
            name='AddUsAdmin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jobname', models.TextField(blank=True, max_length=500, null=True)),
                ('address', models.TextField(blank=True, max_length=500, null=True)),
                ('publishDate', models.DateTimeField(default=django.utils.timezone.now, max_length=20)),
                ('content', DjangoUeditor.models.UEditorField(default='', verbose_name='职位详情')),
            ],
        ),
    ]