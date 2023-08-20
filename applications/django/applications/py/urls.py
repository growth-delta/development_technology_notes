from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'py'
urlpatterns = [
    path('news/rss/', views.RSS, name='rss_feed'),
    path('commodities/', views.Scrape, name='commodity'),
]
