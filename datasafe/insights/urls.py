# insights/urls.py
from django.urls import path
from .main.views import (
    account_view,
    browse_view,
    complete_view,
    home_view,
    intro,
    login_view,
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
    login_page_real_view
)
urlpatterns = [
    path('intro/', intro, name='intro'),
    path('upload/', upload, name='upload'),
    path('dataset_review/', dataset_review, name='dataset_review'),
    path('', home_view, name='home'),  # Redirect to 'intro' view for the root path
    path('account/', account_view, name='account'),
    path('browse/', browse_view, name='browse'),
    path('complete/', complete_view, name='complete'),
    path('home/', home_view, name='home'),
    path('login/', login_view, name='login'),
    path('qset1/', qset1_view, name='qset1'),
    path('qset2/', qset2_view, name='qset2'),
    path('qset3/', qset3_view, name='qset3'),
    path('register/', register_view, name='register'),
    path('review/', review_view, name='review'),
    path('saved/', saved_view, name='saved'),
    path('save_data/', save_data, name='save_data'), 
    path('login_page_real/',login_page_real_view, name='login_page_real'),
    path('saved/complete.html', complete_view, name='complete'),


    # Add more paths as needed
]
