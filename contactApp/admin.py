from django.contrib import admin
from .models import Contact, ContactMethod, TalentConcept, AddUsAdmin
# Register your models here.
#联系我们
class ContactAdmin(admin.ModelAdmin):
    list_display = ['title', 'title_en', 'photo']


#联系电话
class ContactMethodAdmin(admin.ModelAdmin):
    list_display = ['title', 'tel', 'tel1', 'tel2', 'qq1', 'qq2', 'email', 'url', 'address']


#人才理念
class TalentConceptAdmin(admin.ModelAdmin):
    list_display = ['title', 'name1', 'title1', 'photo1', 'name2', 'title2', 'photo2', 'name3', 'title3', 'photo3']


# 加入我们
class AddUsAdminAdmin(admin.ModelAdmin):
    style_fields = {'content': 'ueditor'}
    list_display = ['jobname', 'address', 'publishDate', 'content']


admin.site.register(Contact, ContactAdmin)
admin.site.register(ContactMethod, ContactMethodAdmin)
admin.site.register(TalentConcept, TalentConceptAdmin)
admin.site.register(AddUsAdmin, AddUsAdminAdmin)
