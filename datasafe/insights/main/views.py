import os
import sys
import pandas as pd
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse


def account_view(request):
    return render(request, 'main/account.html')
def browse_view(request):
    return render(request, 'main/browse.html')
def complete_view(request):
    return render(request, 'main/complete.html')
def home_view(request):
    return render(request, 'main/home.html')
def intro(request):
    return render(request, 'main/intro.html')
def login_view(request):
    return render(request, 'main/login_page_real.html')
def qset1_view(request):
    return render(request, 'main/qset1.html')
def qset2_view(request):
    return render(request, 'main/qset2.html')
def qset3_view(request):
    return render(request, 'main/qset3.html')
def register_view(request):
    return render(request, 'main/register.html')
def review_view(request):
    return render(request, 'main/review.html')
def saved_view(request):
    return render(request, 'main/saved.html')



def process_file(filename, max_rows, max_cols, title_row):
    print("processing file")
    
    columns_to_read = f'A:{max_cols}'

    filetype = filename[-3:].lower()
    if filetype == "xls":
        if title_row == "Y":
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read, skiprows=1)
        elif title_row == "n":
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read)

    elif filetype == "csv":
        data = pd.read_csv(filename)
        print("csv detected")

        
    else:
        print("Unrecognised input")
        
    clean_data = data.dropna(axis=0, how='all').dropna(axis=1, how='all')


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
            result.append(f"Unique Values: {unique_values}")
            result.append(f"Value Counts:\n{data[field].value_counts()}")
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
    print("check 1")
    if request.method == 'POST' and 'file' in request.FILES:
        print("check 2")
        file = request.FILES['file']
        if file:
            print("check 3")
            fs = FileSystemStorage()
            filename = fs.save(file.name, file)
            file_path = fs.url(filename)

            max_rows = int(request.POST['max_rows'])
            max_cols = request.POST['max_cols'].upper()
            title_row = request.POST['title_row']

            try:
                result = process_file(file_path, max_rows, max_cols, title_row)
            except Exception as e:
                fs.delete(filename)  # Remove the uploaded file after processing
                return JsonResponse({'error': f'File processing error: {str(e)}'}, status=400)

            fs.delete(filename)  # Remove the uploaded file after processing

            return JsonResponse({'result': result})

    return JsonResponse({'error': 'File not found'}, status=400)
def dataset_review(request):
    # Retrieve and pass data for dataset review
    return render(request, 'review.html')
