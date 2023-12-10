const express = require("express");
require ("dotenv").config()
const app = express()
const db = require("./app/models");
const port = process.env.PORT || 3001


app.get("/movies",(req,res)=>{
res.status(200).send ("All Movies data in JSON format from mongo DB")
})

app.get("/genres",(req,res)=>{
    res.status(200).send ("All Genres data in JSON format from mongo DB")
})

app.get("/artists",(req,res)=>{
    res.status(200).send ("All  Artist in JSON format from mongo DB")
})



app.listen(port,() =>{
    console.log(`listening on port ${port}`);
})



db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });