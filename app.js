const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

//bodyparser middleware, runs each time a route is hit, and converts response to json
app.use(bodyParser.json());
//Import Routes
const postsRoute = require("./routes/posts");

app.get("/", (req, res) => {
  res.send("Home");
});

///Middlewares, a function that executes when a certain route is hit. Good for authentication etc, can check the user each time they hit a route
app.use("/posts", postsRoute);
//Connect to MongoDB using Mongoose
mongoose.connect(
  process.env.DB_CONN,
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => {
    console.log("Database connected");
  }
);

//Listen to server
app.listen(3000);
