from django.shortcuts import render
from django.http import JsonResponse

def ReactIndex(request):
    ''' React.js Application Index '''
    return render(request, "website/landing_page.html")

def NoteTaking(request, path=''):
    ''' React.js Application: Note Taking: https://www.youtube.com/watch?v=j898RGRw0b4 '''
    return render(request, "applications/react/NoteTaking.html", context={'context_variable': 'value'})

def MarineTraffic(request):
    ''' React.js Application: MarineTraffic https://aisstream.io/ '''
    return render(request, "applications/react/MarineTraffic.html")

def GeoMap(request):
    ''' React.js Application: Leaflet Map '''
    return render(request, "applications/react/GeoMap.html")

def Distribution(request):
    ''' React.js Application: Probability Distribution '''
    return render(request, "applications/react/Distribution.html")
