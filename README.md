# HW12 - Eat Da Burger!

## Application Deployed on Heroku

[https://eatdaburger-peb.herokuapp.com/](https://eatdaburger-peb.herokuapp.com/)

## Overview

To run the application:

* node .\server.js

Technologies used: 

* JavaScript
* Modules
* Node
* Express
* Handlebars
* MVC
* ORM
* MySql

 There are some default burgers provided that the user can click on to eat. This moves them to the right column to reflect that they have been consumed. If the user wishes to enjoy them again they can click on the "Enjoy Again" button to move them back to the left column to be eaten. To add a new burger the user types the burger name into the "New Burger Name" field at the top of the page and click the "Add Burger" button.

## Architecture

This application is mostly an exercise in program architecture, MVC, database and html templates. The application server is hosted in server.js. It fires up an express server that delegates the routes to the burgers controller. The homemade orm is the model and performs all the database operations to read all burgers, create a new burger and update an existing burger. The view is powered by handlebars. The burger page consists of two similar columns driven by the stored value of whether or not they've been eaten. The columns are templates that loop through all burgers and include/exclude based on the eaten value. 

