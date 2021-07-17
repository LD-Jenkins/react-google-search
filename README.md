# Google Book Search

Book search React.js app using Node.js, Mongoose.js, and Express.js.

# Project Description

Simple application that allows you to search books through Google Books API and save books for later viewing (saves to database). Saved books may also be removed from the database.

The project uses Express.js for handling requests/responses and Mongoose.js for simple database storage of saved book data.

# Setup/Installation

## Local

First start by making sure all project files have been downloaded and dependencies installed. A '.env' file will need to be added to store your API key for Google Books API. Otherwise just make sure MongoDB is installed/running. Simply run the start script and a window will open for you with the app running. 

## Heroku

This project is also ready for deployment to Heroku using MongoDB Atlas.<br>
[Checkout my hosted app here!](https://book-search-lj.herokuapp.com/)


# Usage Instructions

Once up and running simply type in a book title to see the results displayed. Clicking the save button will allow the book to be seen from the "See Saved Books" page you can click on in the navigation bar. From that page any saved book can be 'View'ed which will open Google Books info page for the volume and 'Delete'ed to remove it from the database.