const { postModel } = require("../model/post");
const Comment = require("../model/comment");


exports.allPost = async (req, res) => {
    try {
        const allpost = await postModel.find({ flag: true }).populate([{ path: "user", select: ["full_name", "email", "phone", "user_img", "user_status"] }, { path: "jobcategory" }]);

        const allComment = await Comment.find();

        if (allpost.length) {
            const posts = allpost.map(post => {
                const comments = allComment.filter(comment => comment.post.toString() === post._doc._id.toString())

                return {
                    ...post._doc,
                    comments: comments
                }
            })

            return res.status(200).json({ success: true, message: "Posts Fetched Successfully", data: posts })
        } else {
            return res.status(404).json({ success: false, message: "No Posts Found" })
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc })
    }
}

exports.addPost = async (req, res) => {
    // console.log("req.body=>", req.body);
    // console.log("req.file=>", req.file);
    const { title, sub_title, content, user, jobcategory } = req.body;
    try {
        if (title && sub_title && content && req.file.filename && user && jobcategory) {
            const newPost = await postModel({ title, sub_title, post_img: "/public/uploads/" + req.file.filename, content, user, jobcategory })
            const savePost = await newPost.save();
            if (savePost) {
                return res.status(200).json({ success: true, message: "Posts Added Successfully", data: savePost });
            } else {
                return res.status(400).json({ success: false, message: "Somthing Went Wrong. Try Again" })
            }
        } else {
            return res.status(400).json({ success: false, message: "All Fields are Required" })
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc })
    }
}

exports.addComment = async (req, res) => {
    const { post, comment, name, email } = req.body;
    // console.log("req.body=>", req.body);
    // return;
    try {
        if (post, comment, name, email) {
            const newComment = await Comment({ post, comment, name, email })
            const saveComment = await newComment.save();
            if (saveComment) {
                return res.status(200).json({ success: true, message: "Comment Added Successfully", data: saveComment });
            } else {
                return res.status(400).json({ success: false, message: "Somthing Went Wrong. Try Again" })
            }
        } else {
            return res.status(400).json({ success: false, message: "All Fields are Required" })
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc })
    }
}