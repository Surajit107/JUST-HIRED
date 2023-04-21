const express = require("express");
const adminController = require("../controller/adminController");
const { ImageUpload } = require("../config/mediaConfig");
const modelAuth = require("../middleware/modelAuth");
const { jobCategoryModel } = require("../model/jobCategory");


const router = express.Router();

//admin Views route
router.get("/dashboard", adminController.adminDashboard)
router.get("/about", adminController.addAboutView)
router.get("/job", adminController.postJobView)
router.get("/blog", adminController.addBlogView)
router.get("/category", adminController.addCategoryView)

// all job category route
router.get("/alljobcategory", adminController.getJobCategory);

// add job category
router.post("/addjobcategory", ImageUpload.single("category_logo"), [modelAuth(jobCategoryModel)], adminController.addJobCategory);

module.exports = router;