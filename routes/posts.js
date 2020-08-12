const express = require("express");
const router = express.Router();

///ROUTES, responds to a request made to a specific address

router.get("/", (req, res) => {
  res.send("postssaa");
});

router.get("/specific", (req, res) => {
  res.send("Spec post");
});

module.exports = router;
