from django.db import models
from django.forms import CharField, DateField

# Create your models here.
class regform(models.Model):
    firstName=models.CharField(max_length=30)
    lastName=models.CharField(max_length=30)
    username = models.CharField(max_length = 30)
    DOB= models.DateField()
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    
    def __str__(self):
        return self.username
