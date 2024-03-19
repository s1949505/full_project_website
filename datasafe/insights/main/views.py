import os
import sys
import pandas as pd
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.hashers import make_password
import json
from ..models import Datacard





def account_view(request):
    if request.user.is_authenticated:
        user_name = request.user.first_name or "User"
    else:
        user_name = "User"
    context = {
        'user_name': user_name
    }
    return render(request, 'main/account.html', context)
def login_view(request):
    return render(request, 'registration/login.html')
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
    print("request method: ", request.method)
    if request.method == 'POST':
        print("logging in")
        email = request.POST.get('email').strip()  # Remove leading/trailing whitespace
        password = request.POST.get('password')
        remember_me = request.POST.get('remember_me') == 'on'


        try:
            user = User.objects.get(email=email)  # Case-sensitive query
        except User.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Unrecognized email'})

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
            return JsonResponse({'status': 'error', 'message': 'Incorrect Password'})

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


def save_datacard(request):
    if request.method == 'POST':
        # Retrieve form data from POST request
        form_data = json.loads(request.body)

        # Extract form fields
        dataset_name = form_data.get('DatasetName')
        description = form_data.get('description')
        motivation = form_data.get('motivation')
        # Extract other fields as needed

        # Assuming the user is logged in, you can access the user instance
        user = request.user

        # Create a new Datacard instance and save it to the database
        datacard = Datacard.objects.create(
            user=user,
            name=dataset_name,
            description=description,
            motivation=motivation,
            # Add other fields as needed
        )

        # Return success response
        return JsonResponse({'message': 'Datacard saved successfully'}, status=200)

    else:
        # Return error response if request method is not POST
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)