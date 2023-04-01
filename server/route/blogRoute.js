const express = require("express");
const {validatePosts} = require("../model/post");
const postAuth = require("../middleware/modelAuth");
const blogController = require("../controller/blogController");
const { ImageUpload } = require("../config/mediaConfig");


const router = express.Router();

// all posts
router.get("/allpost", blogController.allPost)

// add posts
router.post("/addpost", ImageUpload.single("image"), [postAuth(validatePosts)], blogController.addPost)

module.exports = router;