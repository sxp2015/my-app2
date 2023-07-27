from django.contrib import admin

from .models import Company, DevelopmentHistory

# Register your models here.
# 关于我们
class CompanyAdmin(admin.ModelAdmin):
    list_display = ['description', 'photo0', 'photo1', 'missionvision']

#发展历程
class DevelopmentHistoryAdmin(admin.ModelAdmin):
    list_display = ['year', 'description']



admin.site.register(Company, CompanyAdmin)
admin.site.register(DevelopmentHistory, DevelopmentHistoryAdmin)

admin.site.site_header = "中证恒创后台管理系统"
admin.site.site_title = "中证恒创后台管理系统"