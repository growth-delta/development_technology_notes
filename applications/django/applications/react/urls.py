from django.urls import path
from django.views.generic import TemplateView

from . import views

# 'react:NoteTaking'
app_name = 'react'
urlpatterns = [
    # Notes
    # path('Note-Taking/', views.NoteTaking, name='NoteTaking'),
    # path('Note-Taking/', TemplateView.as_view(template_name='applications/react/NoteTaking.html'), name='NoteTaking'),
    path(r'Note-Taking/', views.NoteTaking, name='NoteTaking'),
    path(r'Note-Taking/<path:path>', views.NoteTaking, name='NoteTaking_path'),

    path('Marine-Traffic/', views.MarineTraffic, name='MarineTraffic'),
    path('Geo/', views.GeoMap, name='GeoMap'),
    path('data/analytics/distribution/probability', views.Distribution, name='Distribution'),
]
