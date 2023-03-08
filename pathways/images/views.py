
from django.shortcuts import render, get_object_or_404
from .models import Image,Path
from django.views.generic.list import ListView

def imageView(request, image_id):
    #displays a single image or 404
    image = get_object_or_404(Image, id=image_id)
    return render(request, 'imageView.html', {'image': image})

class pathView(ListView):
    #displays all paths
    model = Path
    context_object_name = "pathways"
    template_name = "pathView.html"