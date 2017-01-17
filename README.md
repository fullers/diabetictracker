# Diabetic Tracker
This is a full-stack web application that uses Node.js, Express, React.js, and MongoDB with Mongoose.

You may go to [https://diabetictracker.herokuapp.com](https://diabetictracker.herokuapp.com) to view a demo of the application.

## Technologies used

The following technologies, tools, and npm packages were used:
* Node.js
* React.js
* NPM Packages
	* express
	* body-parser
	* method-override 
	* morgan
	* axios
	* babel-core
	* babel-loader
	* babel-preset-es2015
	* babel-preset-react
	* react
	* react-dom
	* react-router
	* webpack (Dev Dependency)
	* passport
	* passport-local
	* passport-local-mongoose
	* MongoDB
	* Mongoose
	* bluebird
	* Passport (Local Authentication)
* Object Relational Mapping (ORM)
* MongoDB and mongolab
* [Heroku](https://heroku.com) 
* MVC and ORM Desgin

## Files and Folder Structure

* **server.js** - File used to start the node.js web server.
* **webpack.config.js** - File used by webpack.
* **package.json** - File used to insta the npm packages.
* **.gitignore** - File used to ignore the node_modules folder used by NPM.
* **public** - Folder to store any files the browser needs to access.
	* **assets** - Folder to store CSS and Images
		* **css** - Sub folder to store css files.
			* style.css - File used to create the CSS needed for the application.
		* **images** - Sub folder to store image files.
			*Diabetes Monitor-48.png - image used for the jumbotron in Main.js. 
			*scrnshot-x.png - images used for this README.md
		* **bundle.js** - File created by webpack to bundle all Javascript for React.js.
		* **index.html** - File used as the main launch file for React.js.
		* **noauth.html** - File used when the user does not have access.
* **models** - Folder to house your model files for Mongoose.
	* data.js - File used to create a document for MongoDB to store data entries.
	* Physician.js - File used to create a document for MongoDB to store physician data entries.
	* user.js - File used to create a document for MongoDB to store user data created from the Proile.
* **db** - Folder to store db connection file.
	* db.js - MongoDB Connection file.
* **controllers** - Folder to store controller or route files.
	* db_controller.js - File used to create routes that will perform actions against the database.
* **app** - Folder to store files and sub folders for the application.
	* **components** - Sub Folder that is used for React components. These are the main files that makeup the template of the application.
		* Data.js - File used to render the data entry form for the user.
		* Login.js - File used to render the Login form for the user.
		* Main.js - File used to render the jumbtron used as the header (image, Title, and text) across the application. This is a template that will show on all pages.
		* Physician.js - File used to render the Physician data form for the user to be able to add their physician name and email.
		* Profile.js - File used to create the user data (Name, username, password, email, target levels min/max).
		* Userchoice.js - File used to render two buttons that will give the user the choice of entering or viewing their data.
		* View.js - File used to render the users data.
	* **config** - Folder used to store configuration files.
		* routes.js - File used to configure React Routes.
	* **utils** - Folder used to store helper.js file.
		* helper.js - File used to create functions for React files that will perform database actions.
	* app.js - File used by React to launch the react components and routes.

## Requirements

You will need to edit the file called db.js and replace the following code, **Your Production dbURI**. It will be similar to the local which will need to be like `mongodb://.......`

``` javascript
var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

//DB
 var dbURI = 'mongodb://localhost/diabetictracker';
if (process.env.NODE_ENV === 'production') {
    dbURI= "Your Production dbURI";
}
mongoose.connect(dbURI);
var db = mongoose.connection;

  db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });

  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });
```
## Getting Started

* Use git clone to copy this git hub 

* Open the command line and navigate to the folder when you cloned the files
	* Run `npm install` in terminal or command line to install dependencies.  
	* Use run  `node server.js` to start the application.
* use localhost:3000 in your browser to access this application.

### Diabetic Tracker - Login

[Alt Text](public/assets/images/scrnshot-login.png?raw=true "Login Page")

Enter a user name and password, then click on **Login** button to authenticate. 

[Alt Text](public/assets/images/scrnshot-profile.png?raw=true "Profile Page")

If the user does not have a profile setup then click on **Create** button. If the user clicks on **Add Physician**. 

[Alt Text](public/assets/images/scrnshot-physician.png?raw=true "Physician Page")

If the user creates a profile they can add their physician data (name and email).

[Alt Text](public/assets/images/scrnshot-userchoice.png?raw=true "User Choice Page")

The user has a choice to either enter data or view data.

[Alt Text](public/assets/images/scrnshot-enterdata.png?raw=true "Enter Data Page")

The user may enter the date, time, and glucose level (mg/dl).


## Authors

* **Shaun** - *Node.js, Express, React.js, MongoDB, and CSS*

## License
   
   None 