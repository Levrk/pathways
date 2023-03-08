# Pathways : 2D Slide Deck #


Pathways is a web-based application for creating a series of two-dimensional slideshows within a collection of images. 


I wanted to create an interactive method for artists to display their work online. 
Simply posting an image or slideshow on social media allows for passive consumption. 
An audience should be given the opportunity to explore and interact with a piece as they see fit. 

---

### Made With: Django, Python, HTML, CSS, JavaScript

---
### Django Models:
``` 
class Path (models.Model):
	
	name -> path name
	image -> cover photo
	start -> starting image
```

``` 
class Image (models.Model):

	name -> image caption
	image -> image file
	left -> images left from self
	right -> images right from self
	up -> images up from self
	down -> images down from self
```
