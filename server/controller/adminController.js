const { jobCategoryModel } = require("../model/jobCategory");


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
                category_logo: "/public/uploads/"+req.file.filename,
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