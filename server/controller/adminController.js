const { jobCategoryModel } = require("../model/jobCategory");


exports.getJobCategory = async (req, res) => {
    try {
        const allCategory = await jobCategoryModel.find();
        if(allCategory){
            return res.status(200).json({ success: true, message: "Job Category Fetched Successfully", data: allCategory });
        }else{
            return res.status(400).json({ success: false, message: "No Records Found"});
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc});
    }
};

exports.addJobCategory = async (req, res) => {
    const { category_name } = req.body;
    try {
        if (category_name && req.file.filename) {
            const newCategory = await jobCategoryModel({
                category_name,
                category_logo: req.file.filename
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