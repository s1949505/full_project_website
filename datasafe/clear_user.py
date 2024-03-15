from django.contrib.auth.models import User

def clear_user_data():
    # Delete all user accounts
    User.objects.all().delete()

# Call the function to clear user data
clear_user_data()