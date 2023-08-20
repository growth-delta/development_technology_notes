from django.urls import path

from . import views


app_name = 'api'
urlpatterns = [
    # Map Application API's
    path(f'maps/geo/', views.MapGeo.as_view(), name='MapGeo'),
    path(f'maps/ais/', views.get_ais_data, name='AIS'),
    # Macro
    path(f'macro/euro-area', views.EA19.as_view(), name='EA19_data'),
    # Demonstration of API
    path(f'test/excel/', views.Test_Table.as_view(), name='test_excel'),
    path(f'test/json/', views.Test_FactGenerator.as_view(), name='test_json'),
]
