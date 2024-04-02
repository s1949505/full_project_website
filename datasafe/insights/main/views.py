import os
import sys
import pandas as pd
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
#from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password
import json
from ..models import Datacard
from django.contrib import messages
import re

from django.contrib.auth import get_user_model

User = get_user_model()


def account_view(request):
    if request.user.is_authenticated:
        user_bio = request.user.bio  # Get the user's bio
        user_links = request.user.contact
        user_name = request.user.first_name or "User"
    else:
        user_name = "User"
        user_links = "Where to find me"
        user_bio = "About me"
    
    
    if user_bio == "" or len(user_bio) == 0 or not user_bio:
        user_bio = "User Bio"
    if user_links == "" or len(user_links) == 0 or not user_links:
        user_links = "Contact points"

    context = {
            'user_name': user_name,             
            'bio': user_bio, 
            'links': user_links
        }
    
    print("ceqnlvwlvk: ", len(user_links))

    return render(request, 'main/account.html', context)
def login_view(request):
    return render(request, 'registration/login.html')
def reset_view(request):
    return render(request, 'registration/reset.html')
def browse_view(request):
    return render(request, 'main/browse.html')
def complete_view(request):
    return render(request, 'main/complete.html')
def complete(request, identifier):
    return render(request, 'complete.html', {'identifier': identifier})
def home_view(request):
    print("check at redirect: ", request.user.is_authenticated)
    if request.user.is_authenticated:
        return render(request, 'main/home.html', {'is_authenticated': True})
    else:
        return render(request, 'main/home.html', {'is_authenticated': False})

def intro(request):
    return render(request, 'main/intro.html')
def qset1_view(request):
    return render(request, 'main/qset1.html')
def qset2_view(request):
    return render(request, 'main/qset2.html')
def qset3_view(request):
    return render(request, 'main/qset3.html')
def register_view(request):
    return render(request, 'registration/register.html')
def review_view(request):
    return render(request, 'main/review.html')
def saved_view(request):
    return render(request, 'main/saved.html')


def custom_logout(request):
    logout(request)
    print("logging out")
    return redirect('home')
    
def register_user(request):
    print("registering user")
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        dob = request.POST['dob']
        password = request.POST['password']  
        confirm_password = request.POST['confirmPassword']  
        

        print("confirm: ", confirm_password)   
        
        print("Received registration request for:", email)  # Print the email received

        if not all([name, email, dob, password]):
            print("missing fields")
            return JsonResponse({'error': 'All fields must be completed to create an account.'})

        # Check if the email is already registered
        if User.objects.filter(email=email).exists():
            print("email already used")
            return JsonResponse({'error': 'Email is already being used'})
        if confirm_password!= password:
            return JsonResponse({'error': 'Passwords do not match'})

        #hashed_password = make_password(password)
        # Create a new user
        user = User.objects.create_user(username=email, email=email, password=password)

        user.first_name = name

        # Save the user instance
        user.save()
        print("user: ", user)
        print("email: ", email)
        #print("password: ", hashed_password)

        # Authenticate the user
        user = authenticate(request, username=email, password=password)
        print("authenticated_user: ", user)
        if user is not None:
            print("User authenticated successfully:", user.username)  # Print authentication status

            login(request, user)
            print("user authentication status: ", request.user.is_authenticated)
            request.session['is_authenticated'] = True
            return redirect('home')  # Redirect to the home page or any other desired page
        else:
            print("user is none")
            print("Authentication failed for user:", email)  # Print authentication failure message

            return JsonResponse({'error': 'Registration failed'})
    else:
        return JsonResponse({'error': 'Invalid request method'})
    

def login_user(request):
    print("herehreh")
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success'})
        else:
            print('Login failed: Invalid credentials')

            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'})

    return JsonResponse({'status': 'error', 'message': 'Invalid request aaaaaaa method'})


def login_user_process(request):
    if request.method == 'POST':
        print("logging in")
        email = request.POST.get('email').strip()  # Remove leading/trailing whitespace
        password = request.POST.get('password')
        remember_me = request.POST.get('remember_me') == 'on'


        try:
            user = User.objects.get(email=email)  # Case-sensitive query
        except User.DoesNotExist:
            return JsonResponse({'Error': 'Unrecognized email'})

        user = authenticate(request, username=email, password=password)
        print("user: ", user)
        if user is not None:
            login(request, user)
            request.session['is_authenticated'] = True
            if remember_me:
                request.session.set_expiry(None)
            else:
                # If remember_me is not checked, use default session expiration
                request.session.set_expiry(0)

            return redirect('home')
        else:
            return JsonResponse({'error': 'Incorrect Password'})

    return JsonResponse({'error': 'Invalid request method'})

def reset_password(request):
    if request.method == 'POST':
        email = request.POST.get('email').strip()  # Remove leading/trailing whitespace
        password1 = request.POST.get('password')
        password2 = request.POST.get('password2')

        try:
            user = User.objects.get(email=email)  # Case-sensitive query
        except User.DoesNotExist:
            return JsonResponse({'error': 'Unrecognized email'})
        
        if password1 != password2:
            return JsonResponse({'error': 'Passwords do not match'})
        elif password1 == '':
            return JsonResponse({'error': 'Password must be given a value'})
        elif not re.match(r'^(?=.*\d).{8,}$', password1):
            return JsonResponse({'error': 'Password must contain at least one number and be at least 8 characters long'})

        
        user.password = make_password(password1)
        user.save()

        return redirect('login')  # Redirect to login page after successful password reset

    
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})


def process_file(filename, max_rows, max_cols, title_row):
    print("processing file")
    
    columns_to_read = f'A:{max_cols}'

    filetype = filename[-3:].lower()
    print(filetype)
    if filetype == "xls":
        if title_row == "Y":
            print("title row ")
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read, skiprows=1)

        elif title_row == "n":
            print("no title row")
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read)

    elif filetype == "csv":
        data = pd.read_csv(filename)
        print("csv detected")

    else:
        print("Unrecognised input")
        
    clean_data = data.dropna(axis=0, how='all').dropna(axis=1, how='all')
    print("file type passed")

    fields_to_search = ["age", "height", "ethnicity", "religion", "race", "ethical background", "sex", "Gender"]

    matching_fields = []
    
    for col in clean_data.columns:
        for field in fields_to_search:
            if field.lower() in col.lower():
                print(field)
                print(col)
                matching_fields.append(col)
                break

    difference_threshold = 1.1
    result = []
    if matching_fields:
        print(f"Fields matching criteria: {matching_fields}")

        # Count unique values in matching fields
        for field in matching_fields:
            unique_values = data[field].dropna().unique()
            result.append(f"\nField: {field}")
            #result.append(f"Unique Values: {unique_values}")
            #result.append(f"Value Counts:\n{data[field].value_counts()}")
    # Check if the max value is 10% greater than the next highest
            value_counts = data[field].value_counts()
            max_value_field = value_counts.idxmax()
            max_value = value_counts.max()
            second_max_value = value_counts.nlargest(2).iloc[1]
            
            if (max_value / second_max_value) > difference_threshold:
                result.append(f"The count for {max_value_field} in {field} is disproportionately greater. Have you considered the effects of this?")

    else:
        result.append("No matching fields found.")
    return result

@csrf_exempt
def upload(request):
    print(request.FILES)
    if request.method == 'POST' and 'file' in request.FILES:
        print("check 2")
        if file := request.FILES['file']:
            print(file)
            fs = FileSystemStorage()
            filename = fs.save(file.name, file)
            file_path = fs.url(filename)

            max_rows = "zz"
            max_cols = int

            print(filename[-3:])
            if (filename[-3:] != "csv"):
                max_rows = int(request.POST['max_rows'])
                max_cols = request.POST['max_cols'].upper()
                
            title_row = request.POST['title_row']

            try:
                result = process_file(filename, max_rows, max_cols, title_row)
            except Exception as e:
                print("erororroror")
                fs.delete(filename)  # Remove the uploaded file after processing
                return JsonResponse({'error': f'File processing error: {str(e)}'}, status=400)

            fs.delete(filename)  # Remove the uploaded file after processing

    print("processing complete")
    return JsonResponse({'result': result})

def dataset_review(request):
    # Retrieve and pass data for dataset review
    return render(request, 'review.html')

@csrf_exempt  # Use this decorator for simplicity in this example; consider using a proper csrf protection method in production
def save_data(request):
    if request.method == 'POST':
        identifier = request.POST.get('identifier')
        dataset_name = request.POST.get('datasetName')
        user = request.POST.get('user')
        # Extract other data fields as needed
        # Save the data to your database or any storage mechanism
        return JsonResponse({'status': 'success'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'})


@csrf_exempt
def save_datacard(request):
    print("doing save datacrd")
    if request.method == 'POST':
        dataset_name = request.POST.get('dataset_name')
        user_first_name = request.user.first_name 
        identifier = f"{user_first_name} {dataset_name}"

        print("dataset name: ", dataset_name)

        # Retrieve form data from POST request
        data = {
            'identifier': identifier,
            'dataset_name': request.POST.get('dataset_name'),
            'description': request.POST.get('description'),
            'motivation': request.POST.get('motivation'),
            'date_created': request.POST.get('date_created'),
            'dataset_accessibility': request.POST.get('dataset_accessibility'),
            'accessibility_info': request.POST.get('accessibility_info'),
            'research_motivation': request.POST.get('research_motivation'),
            'authors': request.POST.get('authors'),
            'contributors': request.POST.get('contributors'),
            'funding_type': request.POST.get('funding_type'),
            'funding_info': request.POST.get('funding_info'),
            'is_combination': request.POST.get('is_combination') == 'true',
            'combination_info': request.POST.get('combination_info'),
            #'date_created': request.POST.get('date_created'),  
            'version': request.POST.get('version'),
            'applications': request.POST.get('applications'),
            'datatypes': request.POST.get('datatypes'),
            'primary_data': request.POST.get('primary_data'),
            'annotation_method': request.POST.get('annotation_method'),
            'annotation_info': request.POST.get('annotation_info'),
            'collection': request.POST.get('collection'),
            'size': request.POST.get('size'),
            'personal_data': request.POST.get('personal_data'),
            'flaws': request.POST.get('flaws'),
            'data_splits': request.POST.get('data_splits'),
            'dataset_format': request.POST.get('dataset_format'),
            'languages': request.POST.get('languages'),
            'doi': request.POST.get('doi'),
            'licence': request.POST.get('licence'),
            'last_update': request.POST.get('last_update'),  
            'is_maintained': request.POST.get('is_maintained') == 'true',
            'maintenance_info': request.POST.get('maintenance_info'),
            'possible_uses': request.POST.get('possible_uses'),
            'unsafe_applications': request.POST.get('unsafe_applications'),
            'bias_problems': request.POST.get('bias_problems'),
            'social_impact': request.POST.get('social_impact'),
            'dataset_citation': request.POST.get('dataset_citation'),
            'additional_information': request.POST.get('additional_information')
        }

        existing_datacard = Datacard.objects.filter(identifier=identifier).first()
        if existing_datacard:
            existing_datacard.delete()  # Delete the existing datacard


        datacard = Datacard(user=request.user, **data)
        print("user for card: ", request.user)
        datacard.save()
        print("datacard: ", datacard)


        return JsonResponse({'status': 'success'})

    return JsonResponse({'error': 'Invalid request method'}, status=400)

@login_required
def saved_view(request):
    # Retrieve the data cards for the current user
    user_datacards = Datacard.objects.filter(user=request.user)

    print("user_datacards: ", user_datacards)

    # Pass the data cards to the template
    return render(request, 'main/saved.html', {'user_datacards': user_datacards})

def get_datacard(request):
    print("getting datacard from identifier")
    if request.method == 'GET':
        identifier = request.GET.get('identifier')
        try:
            datacard = Datacard.objects.get(identifier=identifier)
            # Assuming DataCard model has fields like 'DatasetName', 'description', etc.
            data = {
                'DatasetName': datacard.dataset_name,
                'description': datacard.description,
                'motivation': datacard.motivation,
                'date_created': datacard.date_created,
                'dataset_accessibility': datacard.dataset_accessibility,
                'accessibility_info': datacard.accessibility_info,
                'research_motivation': datacard.research_motivation,
                'authors': datacard.authors,
                'contributors': datacard.contributors,
                'funding_type': datacard.funding_type,
                'funding_info': datacard.funding_info,
                'is_combination': datacard.is_combination,
                'combination_info': datacard.combination_info,
                #'date_created': datacard.date_created,
                'version': datacard.version,
                'applications': datacard.applications,
                'datatypes': datacard.datatypes,
                'primary_data': datacard.primary_data,
                'annotation_method': datacard.annotation_method,
                'annotation_info': datacard.annotation_info,
                'collection': datacard.collection,
                'size': datacard.size,
                'personal_data': datacard.personal_data,
                'flaws': datacard.flaws,
                'data_splits': datacard.data_splits,
                'dataset_format': datacard.dataset_format,
                'languages': datacard.languages,
                'doi': datacard.doi,
                'licence': datacard.licence,
                'last_update': datacard.last_update,
                'is_maintained': datacard.is_maintained,
                'maintenance_info': datacard.maintenance_info,
                'possible_uses': datacard.possible_uses,
                'unsafe_applications': datacard.unsafe_applications,
                'bias_problems': datacard.bias_problems,
                'social_impact': datacard.social_impact,
                'dataset_citation': datacard.dataset_citation,
                'additional_information': datacard.additional_information,
            }
            return JsonResponse(data)
        except Datacard.DoesNotExist:
            return JsonResponse({'error': 'Data card not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    
def save_edited_info(request):
    if request.method == 'POST':
        user = request.user
        edited_bio = request.POST.get('editedBio')
        edited_links = request.POST.get('editedLinks')

        user.bio = edited_bio
        user.contact = edited_links
        user.save()
        updated_info = {
        'bio': user.bio,
        'links': user.contact,
        }
        return JsonResponse(updated_info)
    
    return JsonResponse({'error': 'Invalid request method'}, status=400)



def delete_datacards(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        identifiers = data.get('identifiers', [])

        # Delete data cards with the specified identifiers
        for identifier in identifiers:
            Datacard.objects.filter(identifier=identifier).delete()

        return JsonResponse({'success': True})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)