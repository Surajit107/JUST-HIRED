const express = require("express");
const userController = require("../controller/userController");
const { validateUser } = require("../model/user");
const { validateContacts } = require("../model/contact");
const modelAuth = require("../middleware/modelAuth")
const verifySignup = require("../middleware/verifySignup");
const { ImageUpload } = require("../config/mediaConfig");

const router = express.Router();



// user Routes
// sign up
router.post("/signup", ImageUpload.single("image"), [modelAuth(validateUser), verifySignup.checkDuplicateEntries], userController.userSignup)

// sign in
router.post("/signin",  userController.userSignin)

// contact us
router.post("/contactus", [modelAuth(validateContacts)], userController.contactUs)

module.exports = router;