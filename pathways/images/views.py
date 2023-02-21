
from django.shortcuts import render, get_object_or_404
from .models import Image

def imageView(request, image_id):
    image = get_object_or_404(Image, id=image_id)
    return render(request, 'imageView.html', {'image': image})
