from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser
#implement this for custom user models


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