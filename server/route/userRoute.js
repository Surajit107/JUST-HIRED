const express = require("express");
const userController = require("../controller/userController");
const { validateUser } = require("../model/user");
const { validateContacts } = require("../model/contact");
const userAuth = require("../middleware/modelAuth")
const verifySignup = require("../middleware/verifySignup");
const { ImageUpload } = require("../config/mediaConfig");

const router = express.Router();



// user Routes
// sign up
router.post("/signup", ImageUpload.single("image"), [userAuth(validateUser), verifySignup.checkDuplicateEntries], userController.userSignup)

// sign in
router.post("/signin",  userController.userSignin)

// contact us
router.post("/contactus", [userAuth(validateContacts)], userController.contactUs)

module.exports = router;