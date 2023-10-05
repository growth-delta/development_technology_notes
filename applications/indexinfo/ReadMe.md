# Index Info

Is a simple youtube content index full-stack application, which will be the basis for an eduction platform I intend to build, it can also be plugged into an existing DJANGO REACT PROJECT.

This application is NOT SUITABLE FOR PRODUCTION in the state it's currently in as of 05/10/2023. It is intended for DEVELOPMENT purposes only.

The Backend was built on [Python v3.11.3](https://docs.python.org/release/3.11.3/)
The Frontend was built on [Node.js v18.16.0](https://nodejs.org/en/blog/release/v18.16.0)

## Technology Stack

3rd Party API: [Youtube](https://developers.google.com/youtube/player_parameters) | `<iframe>`

Frontend Styles: [TailwindCSS](https://tailwindcss.com/docs/installation) | CSS

Frontend Framework: [React](https://react.dev/reference/react) | JSX > JavaScript

Backend API: [Django Rest Framework](https://www.django-rest-framework.org/) | Python

Backend Framework: [Django](https://docs.djangoproject.com/en/4.2/) | Python

DataBase Devt: [SQLite](https://www.sqlite.org/docs.html) | Python > SQL

<img src="/assets/public/frontend.jpeg"></img>

## Getting Started

create a `.env` file add a variable `SECRET_KEY = 'django-insecure-pl4jt@3-0v289soc6wrl+7ofc4z!wtj1k(%p7vgh48j6ydwm1#'`

## Getting Started | Backend

<img src="/assets/public/backend.png"></img>

Run the following python commands, this project was developed using Python 3.11.3

`cd /indexinfo`

`py -m venv venv`

`venv/Scripts/Activate.ps1`

`pip install requirements.txt`

`py manage.py makemigrations`

`py manage.py migrate`

`py manage.py runserver`

`py manage.py createsuperuser`

`http://127.0.0.1:8000/admin`

You sign in with your admin account and begin to input data into the Django api/models.py fields.
Once you have input some data you can visually check the main API at: `http://127.0.0.1:8000/api/subjects/`


The backend mainly serves as an API, however in production the backend will also serve the BUILT [vite.js](https://vitejs.dev/guide/build.html) files from django static files and template frameworks.

<img src="/assets/public/backend_api.png"></img>

## Getting Started | Frontend

Run the following npm commands, this project was developed using Node v18.16.0

`cd /assets`

`npm install`

`npm run dev`

`http://localhost:5173`
