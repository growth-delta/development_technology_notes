from django.urls import path
from .views import subject_content_detail


urlpatterns = [
    path('<slug:subject_slug>/', subject_content_detail, name='subject-content-detail'),
]

