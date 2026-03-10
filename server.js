/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts") //in here we are telling the app to require express-ejs-layouts so it can be used. Following the simple rule (you have to have something in order to use it)
const env = require("dotenv").config()
const app = express() //the assignment of the Express as a functio to the "app" variable is a common practice in a Node application
const static = require("./routes/static") //route file named static is imported and stored into a static variable

/* ***********************
 * View engine templates
 *************************/
//below we are saying that ejs wil be the view engine for our application.
app.set("view engine","ejs") //Built into EJS is the understanding tat all views will be stored at views folder and that is where EJS will look for all view files.
app.use(expressLayouts)
app.set("layout","./layouts/layouts") //not at views root. This line says that when express ejs layout goes looking for the basic template for a view it wll fing it in layouts folder and the template will be named layout.

/* ***********************
 * Routes
 *************************/
app.use(static)//Instead of router.use it is now app.use meaning that the application itself will use this resource. The resource which has been exported in the static file is now being use by the app. THis single lineof code now allows the app to know where the public folder is located and that it and all of its subfolders will be used for the static files.

//by doing things in this manner it allows for all functionality, while allowing the server.js file to remain unclutterd.

//INDEX route
app.get("/", function(req, res){ //tis line does a numbr of things, app.get-The express application will watch the "get" object, within http request, for a particular route."/" this is route being watched. It indicates the base route of the application or the route which has no specfic resourse requested.
  //function(req,res){-A javaScript function that takes the request and response objects as parameters}
  res.render("index", {title:"Home"})
  //res.render()-The"res" is the responde object while "render()" is an Expess function that wil retrieve the specified view -"index" to be sent back to the browser.
  //{title:"Home"}- The curly braces are an object (treated like a variable) which holds a name-value pair. This object supplies the value that the "head" partial file expects to receive. The receive object is passed to the view.
  //the }) righ curly braces closes the function while the right paranteses closes the "get" route.
})


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
