from django.db import models
from django.contrib.auth.models import User

#implement this for custom user models

class Datacard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    dataset_name = models.CharField(max_length=100)
    description = models.TextField()
    motivation = models.TextField()
    dataset_accessibility = models.CharField(max_length=100)
    accessibility_info = models.TextField()
    research_motivation = models.TextField()
    authors = models.TextField()
    contributors = models.TextField()
    funding_type = models.CharField(max_length=100)
    funding_info = models.TextField()
    is_combination = models.BooleanField(default=False)
    combination_info = models.TextField(blank=True, null=True)
    date_created = models.DateField(blank=True, null=True)
    version = models.CharField(max_length=20)
#class CustomUser(AbstractUser):
#    bio = models.TextField(blank=True)
#    links = models.URLField(blank=True)
"""
class CustomUser(AbstractUser):
    # Add any additional fields you need
    dob = models.DateField(null=True, blank=True)

# views.py
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        dob = data.get('dob')
        
        # Create a new user
        user = CustomUser.objects.create_user(username=email, email=email, password=password, dob=dob)

        # Log in the user
        login(request, user)

        return JsonResponse({'status': 'success'})
    else:
        return JsonResponse({'status': 'error'})

@csrf_exempt
def custom_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        # Authenticate the user
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error'})
    else:
        return JsonResponse({'status': 'error'})

"""