from django.urls import re_path, path
from .views import imageView, pathView

urlpatterns = [
    re_path(r'^image/(?:\w+/)*(\d+)/$', imageView, name='imageView'),
    path('', pathView.as_view(), name='pathways')
]