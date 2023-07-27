from django.contrib import admin
from .models import Banner
# Register your models here.
class BannerAdmin(admin.ModelAdmin):
    list_display = ['description', 'photo0']

admin.site.register(Banner, BannerAdmin)