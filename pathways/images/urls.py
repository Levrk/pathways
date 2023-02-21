from django.urls import path
from .views import imageView

urlpatterns = [
    path('image/<int:image_id>/', imageView, name='imageView'),
]