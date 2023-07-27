# Generated by Django 3.2.5 on 2021-11-11 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(blank=True, max_length=50, null=True)),
                ('title_en', models.TextField(blank=True, max_length=50, null=True)),
                ('photo', models.ImageField(blank=True, upload_to='Award/')),
            ],
        ),
    ]
