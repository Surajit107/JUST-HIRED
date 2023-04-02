const { postModel } = require("../model/post");
const Comment = require("../model/comment");


exports.allPost = async (req, res)=>{
    try{
        const allpost = await postModel.find({flag: true}).populate("usesr").then(result => {
            if(result){
                return res.status(200).json({success: true, message: "Posts Fetched Successfully", data: result})
            }else{
                return res.status(200).json({success: false, message: "No Posts Found"})
            }
        })

    }catch(exc){
        return res.status(400).json({error: true, message: exc})
    }
}

exports.addPost = async (req, res)=>{
    const {title, sub_title, post_img} = req.body;
    try{
        if(title && sub_title && post_img){
            const newPost = await postModel({title, sub_title, post_img})
            const savePost = await newPost.save();
            if(savePost){
                return res.status(200).json({success: true, message: "Posts Added Successfully", data: savePost});
            }else{
                return res.status(200).json({success: false, message: "Somthing Went Wrong. Try Again"})
            }
        }else{
            return res.status(200).json({success: false, message: "All Fields are Required"})
        }
    }catch(exc){
        return res.status(400).json({error: true, message: exc})
    }
}