const express = require("express");
const adminController = require("../controller/adminController");
const adminViewsController = require("../controller/adminViewsController");
const { ImageUpload } = require("../config/mediaConfig");
const modelAuth = require("../middleware/modelAuth");
const { jobCategoryModel } = require("../model/jobCategory");


const router = express.Router();

//admin Views route
router.get("/dashboard", adminViewsController.adminDashboard)
router.get("/about", adminViewsController.addAboutView)
router.get("/job", adminViewsController.postJobView)
router.get("/blog", adminViewsController.addBlogView)
router.get("/category", adminViewsController.addCategoryView)

// all job category route
router.get("/alljobcategory", adminController.getJobCategory);

// add job category
router.post("/addjobcategory", ImageUpload.single("category_logo"), [modelAuth(jobCategoryModel)], adminController.addJobCategory);

module.exports = router;