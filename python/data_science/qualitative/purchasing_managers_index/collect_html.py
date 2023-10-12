import requests
from bs4 import BeautifulSoup

import os
from dotenv import load_dotenv
load_dotenv()
URL = os.environ.get("URL")


class IsmData:
    ''''''
    mfgs = 'manufacturing'
    serv = 'services'


# Make a GET request
url = f'{URL}/manufacturing-pmi-at-49-september-2023-manufacturing-ism-report-on-business-301943535.html'
response = requests.get(url)
response.raise_for_status() # Error handling


# Parse the webpage with BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')


# Find all <ul> tags with type="disc" | this returns the "WHAT RESPONDENTS ARE SAYING" sections
ul_tags = soup.find_all('ul', attrs={"type": "disc"})


# Create a new soup object to store <ul type="disc"><li>CHILDREN</li></ul>
new_soup = BeautifulSoup(features="html.parser")


# Append each <ul> tag to the new soup object after adding the alt attribute
for ul in ul_tags:
    ul['alt'] = f"{url}"  # Add the alt attribute WHICH essentially contains the source document from which the Purchasing Manger comments are parsed
    new_soup.append(ul)


# Define the directory and filename based on the sector and year_month variables
sector_variable = "ism_rob/manufacturing"  # Replace with your sector variable
# sector_variable = "ism_rob/services"  # Replace with your sector variable
year_month = "2023_09"  # Replace with your year_month variable
directory = f"./DataBase/{sector_variable}/"
filename = f"{year_month}_comments.html"
filepath = os.path.join(directory, filename)

# Ensure the directory exists
os.makedirs(directory, exist_ok=True)


# Save the new_soup content to the specified HTML file
with open(filepath, 'w', encoding='utf-8') as file:
    file.write(str(new_soup))


print(f".html files saved to {filepath}")

