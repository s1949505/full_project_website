# insights/urls.py
from django.urls import path, include
from django.contrib.auth.views import LoginView, LogoutView
#from .main.views import CustomRegistrationView

from .main.views import (
    account_view,
    browse_view,
    complete_view,
    home_view,
    intro,
    qset1_view,
    qset2_view,
    qset3_view,
    register_view,
    review_view,
    saved_view,
    upload,
    dataset_review,
    complete_view, 
    save_data, 
    login_view,
    register_user, 
    login_user,
    custom_logout, 
    login_user_process,
    save_datacard,
    saved_view,
    complete,
    get_datacard,
    reset_password,
    reset_view,
    save_edited_info,

)
urlpatterns = [
    path('intro/', intro, name='intro'),
    path('upload/', upload, name='upload'),
    path('dataset_review/', dataset_review, name='dataset_review'),
    path('', home_view, name='home'),  # Redirect to 'intro' view for the root path
    path('account/', account_view, name='account'),
    path('browse/', browse_view, name='browse'),
    path('complete/', complete_view, name='complete_view'),
    path('home/', home_view, name='home'),
    path('login/', login_view , name='login'),
    path('login_user/', login_user , name='login_user'),
    path('logout/', custom_logout, name='logout'),
    path('qset1/', qset1_view, name='qset1'),
    path('qset2/', qset2_view, name='qset2'),
    path('qset3/', qset3_view, name='qset3'),
    path('register/', register_view, name='register'),
    path('register_user/', register_user, name='register_user'),
    path('review/', review_view, name='review'),
    path('saved/', saved_view, name='saved'),
    path('save_data/', save_data, name='save_data'), 
    path('saved/complete.html', complete, name='complete'),
    path('login_user_process/', login_user_process, name="login_user_process"),
    path('save_datacard/', save_datacard, name='save_datacard'),
    path('saved/', saved_view, name='saved_view'),
    path('get_datacard/', get_datacard, name='get_datacard'),
    path('reset_password/', reset_password, name='reset_password'),
    path('reset/', reset_view , name='reset'),   
    path('save_edited_info/', save_edited_info, name='save_edited_info'),






    # Add more paths as needed
]
