import datetime
import pandas as pd
import requests
import feedparser


def ScrapeRSS(url='https://www.oecd.org/unitedstates/index.xml'): #Getting URL
    feed = feedparser.parse(url) #Parsing XML data
    return feed


def ScrapeHTML(url='https://media.lamborghini.com/english/press-releases/global', tablenumber=0, filter=False):
    header={
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
    }
    r=requests.get(url, headers=header,)
    df=pd.read_html(r.text,)[tablenumber]
    df=df.dropna()
    if filter is False:
        return df.to_html(index=False, classes='table table-striped table-hover sortable')
    else:
        df=df.filter(filter, axis=1)
        return df.to_html(index=False, classes='table table-striped table-hover sortable')


def GetCSV(file=''):
    csv_data = pd.read_csv(file)
    csv_data = csv_data.to_html(index=False)
    return csv_data
