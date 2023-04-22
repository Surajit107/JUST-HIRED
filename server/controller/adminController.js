const { jobCategoryModel } = require("../model/jobCategory");
const { jobModel } = require("../model/job");

// dashboard
exports.adminDashboard = (req, res) => {
    res.render("./admin/admin_dashboard", {
        title: "Admin dashboard",
        // data: req.admin,
        // message: req.flash("message")
    })
}

// about
exports.addAboutView = (req, res) => {
    res.render("./admin/about", {
        title: "About",
        // data: req.admin,
        // message: req.flash("message")
    })
}

// blogs
exports.addBlogView = (req, res) => {
    res.render("./admin/blog", {
        title: "Blog",
        // data: req.admin,
        // message: req.flash("message")
    })
}

// post job view
exports.postJobView = (req, res) => {
    res.render("./admin/job", {
        title: "Post job",
        // data: req.admin,
        // message: req.flash("message")
    })
}

// add category view
exports.addCategoryView = (req, res) => {
    res.render("./admin/category", {
        title: "Add category",
        // data: req.admin,
        // message: req.flash("message")
    })
}

exports.getJobCategory = async (req, res) => {
    try {
        const allCategory = await jobCategoryModel.find();

        if (allCategory.length) {
            return res.status(200).json({ success: true, message: "Job Category Fetched Successfully", data: allCategory });
        } else {
            return res.status(400).json({ success: false, message: "No Records Found" });
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc });
    }
};

exports.addJobCategory = async (req, res) => {
    const { category_name } = req.body;
    try {
        if (category_name && req.file.filename) {
            const newCategory = await jobCategoryModel({
                category_name,
                category_logo: "/public/uploads/" + req.file.filename,
            });
            const saveCategory = await newCategory.save();
            if (saveCategory) {
                return res.status(200).json({ success: true, message: "Job Category Added Successfully", data: saveCategory });
            } else {
                return res.status(400).json({ success: false, message: "Something Went wrong. Try Again" });
            }
        } else {
            return res.status(400).json({ success: false, message: "All Fields are Required" });
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc });
    }
};

exports.getAllJob = async (req, res) => {
    try {
        const allJobs = await jobModel.find();

        if (allJobs.length) {
            return res.status(200).json({ success: true, message: "Job Category Fetched Successfully", data: allJobs });
        } else {
            return res.status(400).json({ success: false, message: "No Records Found" });
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc });
    }
};

exports.addJob = async (req, res) => {
    const { title, company_name, short_desp, full_desp, experience, requirement, job_nature, salary_range, location, jobcategory } = req.body;
    console.log("job req.body=>", req.body);
    // console.log("job req.file=>", req.file);
    try {
        if (title && company_name && short_desp && full_desp && experience && requirement && job_nature && salary_range && location && jobcategory && req.file.filename) {
            const newJob = await jobModel({
                title,
                company_name,
                company_logo: "/public/uploads/" + req.file.filename,
                short_desp,
                full_desp,
                experience,
                requirement,
                job_nature,
                salary_range,
                location,
                jobcategory
            });
            const saveJob = await newJob.save();
            if (saveJob) {
                return res.status(200).json({ success: true, message: "Job Category Added Successfully", data: saveJob });
            } else {
                return res.status(400).json({ success: false, message: "Something Went wrong. Try Again" });
            }
        } else {
            return res.status(400).json({ success: false, message: "All Fields are Required" });
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc });
    }
};