from django.contrib.auth.models import AbstractUser
from django.db import models 
from django.conf import settings

class User(AbstractUser):
    username = models.CharField(max_length=24, unique=True,null=False)
    email = models.EmailField(max_length=124, unique=True,null=False)
    user_vocabulary = models.TextField(null=True)



    
