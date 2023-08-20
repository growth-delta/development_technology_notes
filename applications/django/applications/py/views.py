from django.shortcuts import render

from . Functions import ScrapeRSS, ScrapeHTML


def RSS(request):
    
    return render(request, 'applications/py/RSS.html', context={
        'title': 'ADSK | AutoDesk Inc Press Releases',
        'feed': ScrapeRSS(url='https://investors.autodesk.com/rss/news-releases.xml'),
    })


def Scrape(request):
    return render(request, 'applications/py/Scrape.html', context={
        'title': 'Commodity Table',
        'df': ScrapeHTML(url='https://www.indexmundi.com/commodities/', tablenumber=1, filter=False),
    })