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
router.get("/:postId", async (req, res) => {
  console.log("yaaa");
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
  //console.log(req.params.postId);
});

///Delete specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

///Update a post, PATCH
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
