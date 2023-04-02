const express = require("express");
const adminController = require("../controller/adminController");
const { ImageUpload } = require("../config/mediaConfig");
const modelAuth = require("../middleware/modelAuth");
const { jobCategoryModel } = require("../model/jobCategory");


const router = express.Router();

// all job category route
router.get("/alljobcategory", adminController.getJobCategory);

// add job category
router.post("/addjobcategory", ImageUpload.single("image"), [modelAuth(jobCategoryModel)], adminController.addJobCategory);

module.exports = router;