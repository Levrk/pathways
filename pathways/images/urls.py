from django.urls import re_path
from .views import imageView

urlpatterns = [
    re_path(r'^image/(?:\w+/)*(\d+)/$', imageView, name='imageView'),
]