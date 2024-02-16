from django.contrib import admin
from django.urls import path, include
from insights.urls import urlpatterns as insights_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(insights_urls)),
    path('', include('insights.urls')),
    path('accounts/', include('django.contrib.auth.urls')),  # Include authentication URLs

]
