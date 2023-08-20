from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'ai'
urlpatterns = [
    path('code/suggest/', views.GPTCode, name='gpt_code'),
    path('code/debug/', views.GPTDebug, name='gpt_debug'),
]
