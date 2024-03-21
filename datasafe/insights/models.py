from django.db import models
from django.contrib.auth.models import User

#implement this for custom user models

class Datacard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    dataset_name = models.CharField(max_length=100, default= "N/A")
    description = models.TextField(default= "N/A")
    motivation = models.TextField(default= "N/A")
    dataset_accessibility = models.CharField(max_length=100, default= "N/A")
    accessibility_info = models.TextField(default= "N/A")
    research_motivation = models.TextField(default= "N/A")
    authors = models.TextField(default= "N/A")
    contributors = models.TextField(default= "N/A")
    funding_type = models.CharField(max_length=100, default= "N/A")
    funding_info = models.TextField(default= "N/A")
    is_combination = models.BooleanField(default=False)
    combination_info = models.TextField(blank=True, null=True)
    date_created = models.TextField(default= "N/A")
    version = models.CharField(max_length=20, default= "N/A")
    applications = models.TextField(default= "N/A")
    datatypes = models.TextField(default= "N/A")
    primary_data = models.CharField(max_length=100, default= "N/A")
    annotation_method = models.CharField(max_length=100, default= "N/A")
    annotation_info = models.TextField(default= "N/A")
    collection = models.TextField(default= "N/A")
    size = models.TextField(default= "N/A")
    personal_data = models.CharField(max_length=100, default= "N/A")
    flaws = models.TextField(default= "N/A")
    data_splits = models.TextField(default= "N/A")
    dataset_format = models.CharField(max_length=100, default= "N/A")
    languages = models.TextField(default= "N/A")
    doi = models.CharField(max_length=100, default= "N/A")
    licence = models.CharField(max_length=100, default= "N/A")
    last_update = models.TextField(default= "N/A")
    is_maintained = models.BooleanField(default=False)
    maintenance_info = models.TextField(blank=True, null=True)
    possible_uses = models.TextField(default= "N/A")
    unsafe_applications = models.TextField(default= "N/A")
    bias_problems = models.TextField(default= "N/A")
    social_impact = models.TextField(default= "N/A")
    dataset_citation = models.TextField(default= "N/A")
    additional_information = models.TextField(blank=True, default= "N/A")
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