const {jobCategoryModel} = require("../model/jobCategory");


exports.getJobCategory = async (req, res)=>{
    try{

    }catch(exc){
        
    }
};

exports.addJobCategory = async (req, res)=>{
    console.log("Add Category=>", req.body);
    const {category_name, category_logo} = req.body;
    try{
        if(category_name && category_logo){
            const newCategory = await jobCategoryModel({category_name, category_logo});
            const saveCategory = await newCategory.save();
            if(saveCategory){
                return res.status(200).json({success: true, message:"Job Category Added Successfully", data: saveCategory});
            }else{
                return res.status(400).json({success: false, message: "Something Went wrong. Try Again"});
            }
        }else{
            return res.status(400).json({success: false, message: "All Fields are Required"});
        }
    }catch(exc){
        return res.status(400).json({error: true, message: exc});
    }
};