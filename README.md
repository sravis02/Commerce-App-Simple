# Simple-Commerce-App
## General
I created this simple app to practice several frontend and backend technologies.
Since i developed this project in a short time period (4 days), some features are not implemented (for example adress input on checkout).

## Video Walktrough
[![Video Walktrough](https://img.youtube.com/vi/rO790es4eQw/0.jpg)](https://www.youtube.com/watch?v=rO790es4eQw "Video Walktrough")

## Getting Started

 - Clone this repository
### Backend
 - Navigate into the backend-folder  `cd backend`
 - Create virual environment: `python -m venv .venv`
 - Activate it: `.venv\Scripts\activate.bat`(windows) `source .venv/bin/activate`(mac)
 - Install dependencies: `pip install -r requirements.txt`
 - Insert your Stripe apikeys (public & secret) in products/constants.py 
 - Make migrations `python manage.py makemigrations`
 - Migrate `python manage.py migrate`
 - Create admin user `python manage.py createsuperuser`
 - Run server `python manage.py runserver 192.168.0.108:8000`
 - Manually create some dummy test-products
### Mobile App
Method 1)
 - Open App with Expo Go by visiting [this link](https://expo.dev/@lucaso/commerce-app-simple).

Method 2)
 - Navigate into backend-folder `cd mobile-app` (from root directory)
 - Install packages `yarn install`
 - Start Expo App `expo start`
## Technologies 
At the beginning of the project I created a [prototype](https://www.figma.com/proto/ZlUiKpqc9QEGkfKz4WWI5d/Commerce-App?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A20) with Figma.

 ### Mobile App
 - react native with expo
 - react-navigation
 - @reduxjs/toolkit (& rtk query)
 - react-redux
 - @stripe/stripe-react-native
 - expo-font & expo-google-fonts
 - react-native-simple-markdown
 - react-native-skeleton-content
 - react-native-status-bar-height
 - expo-app-loading
### Backend
 - django
 - djangorestframework
 - pillow 
 - stripe
