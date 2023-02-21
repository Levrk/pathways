from django.db import models

# Create your models here.

class Image (models.Model):
	name = models.CharField(max_length=100,null=True)
	image = models.ImageField(upload_to='files/images')
	left = models.ForeignKey('self',on_delete=models.CASCADE,null=True,blank=True,related_name='backRight')
	right = models.ForeignKey('self',on_delete=models.CASCADE,null=True,blank=True,related_name='backLeft')
	up = models.ForeignKey('self',on_delete=models.CASCADE,null=True,blank=True,related_name='backDown')
	down = models.ForeignKey('self',on_delete=models.CASCADE,null=True,blank=True,related_name='backUp')

	def __str__(self):
		return self.name

class Path (models.Model):
	name = models.CharField(max_length=100,null=True)
	start = models.ForeignKey(Image,on_delete=models.CASCADE,null=True)

	def __str__(self):
		return self.name
