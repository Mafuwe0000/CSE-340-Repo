const express = require('express'); //This line is saying that the express pacage is brought into scope of the file and assigned to a local variable.
const router = express.Router(); //The Express "router" funcionality is invoked and stored into a local variable for use. the () is indicating that router is a function.

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public")); // in here the Express router is to "use the express.static" function meaning this is where static resources will be found , with the public folder.
router.use("/css", express.static(__dirname + "public/css")); //this line indicates that any route that contais /css is to refer to the public/css folder, which is found at the root level of the project
router.use("/js", express.static(__dirname + "public/js")); // and this line indicates that any route that contains /js is to refer to the public/js folder, which is found at te root level of the project
router.use("/images", express.static(__dirname + "public/images")); //same as the line above
//Lines 7,8,9 allow us to write paths pointing to these resources easily and also to add subfoldes for images, CSS, and JavaScript and have them still operate correctly
module.exports = router; //This line exports the router object, along with all these use statements for use in other areas of the application. This is VERY IMPORTANT. if a resource is NOT exported it cannot be used somewhere else.



