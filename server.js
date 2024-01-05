const express = require('express');

//creating a rest object so that we can use and access th express features. 
const app = express();

//route
//url -> http://localhost:8080
app.get('/', (req, res)=>{
    return res.status(200).send("<h1>Welcome to restorant app server</h1>");
}); 

//PORT 
const PORT = 8080

//to run server we have to make it listen on port
app.listen(PORT, ()=>{ 
    console.log("server listening on port " + PORT);
})