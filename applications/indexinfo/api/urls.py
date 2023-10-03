from django.urls import path
from .views import list_all_subjects, subject_content_detail


urlpatterns = [
    path('subjects/', list_all_subjects, name='list-all-subjects'),
    path('subjects/<slug:subject_slug>/', subject_content_detail, name='subject-content-detail'),
]

