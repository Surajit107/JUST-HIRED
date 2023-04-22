const express = require("express");
const adminController = require("../controller/adminController");
const { ImageUpload } = require("../config/mediaConfig");
const modelAuth = require("../middleware/modelAuth");
const { validateJobCategory } = require("../model/jobCategory");
const { validateJobField } = require("../model/job");


const router = express.Router();

// ================== get routes ===========================
//admin Views route
router.get("/dashboard", adminController.adminDashboard)
router.get("/about", adminController.addAboutView)
router.get("/job", adminController.postJobView)
router.get("/blog", adminController.addBlogView)
router.get("/category", adminController.addCategoryView)

// all job category route
router.get("/alljobcategory", adminController.getJobCategory);

// all job
router.get("/alljob", adminController.getAllJob);


// ================== post routes ===========================
// add job category
router.post("/addjobcategory", ImageUpload.single("category_logo"), [modelAuth(validateJobCategory)], adminController.addJobCategory);

// add job
router.post("/addjob", ImageUpload.single("company_logo"), [modelAuth(validateJobField)], adminController.addJob);

module.exports = router;