const express = require("express");
const path = require("path");
const multer = require("multer");
const userController = require("../controller/userController");
const { validateUser } = require("../model/user");
const userAuth = require("../middleware/userAuth")
const verifySignup = require("../middleware/verifySignup")

const router = express.Router();

// set up file-storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

// maxsize of file [2 mb & 3 mb]
const imageMaxSize = 2 * 1024 * 1024;
const pdfMaxSize = 3 * 1024 * 1024;

const ImageUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
    limits: {
        fileSize: imageMaxSize
    }
});

const FileUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "file/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .pdf format allowed!"));
        }
    },
    limits: {
        fileSize: pdfMaxSize
    }
});

// user Routes
// sign up
router.post("/signup", userController.userSignup)
// router.post("/signup", ImageUpload.single("image"), [userAuth(validateUser)], userController.userSignup)

module.exports = router;