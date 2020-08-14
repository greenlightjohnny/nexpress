const express = require("express");
const router = express.Router();
const Post = require("../models/post");
console.log("%%%%%%%%%", Post);
///ROUTES, responds to a request made to a specific address

/////Gets all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
////Sends a post, and saves it to the MongoDB
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  ///save to database:
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json(err);
  }
});

//GET Specific post, find
router.get(":/postId", (req, res) => {
  console.log(req.params.postId);
});

module.exports = router;
