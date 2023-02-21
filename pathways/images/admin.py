from django.contrib import admin
from .models import Image, Path
# Register your models here.

class ImageAdmin(admin.ModelAdmin):
    list_display = ['name','id']

admin.site.register(Image,ImageAdmin)
admin.site.register(Path)
