const express = require("express");
const {validatePosts} = require("../model/post");
const {validateComments} = require("../model/comment");
const modelAuth = require("../middleware/modelAuth");
const blogController = require("../controller/blogController");
const { ImageUpload } = require("../config/mediaConfig");


const router = express.Router();

// all posts
router.get("/allpost", blogController.allPost);

// add posts
router.post("/addpost", ImageUpload.single("post_img"), [modelAuth(validatePosts)], blogController.addPost);

// add comment
router.post("/addcomment", [modelAuth(validateComments)], blogController.addComment);

module.exports = router;