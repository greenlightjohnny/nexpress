const express = require("express");

const app = express();
const mongoose = require("mongoose");

///Middlewares, a function that executes when a certain route is hit. Good for authentication etc, can check the user each time they hit a route
app.use("/posts", () => {
  console.log("this is a middleware");
});

///ROUTES, responds to a request made to a specific address
app.get("/", (req, res) => {
  res.send("Hello!");
});

//Connect to MongoDB using Mongoose
mongoose.connect(
  "mongodb+srv://so:so@cluster0.1hf7x.mongodb.net/testdb?retryWrites=true&w=majority",
  () => {
    console.log("Database connected");
  }
);

app.get("/posts", (req, res) => {
  res.send("postssaa");
});

//Listen to server
app.listen(3000);
