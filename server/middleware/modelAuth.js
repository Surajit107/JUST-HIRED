module.exports = (validator) => {
    return (req, res, next) => {
        const { error } = validator(req.body)
        // console.log("modelAuth=>", req.body);
        // console.log("modelAuthFile=>", req.file);
        if (error) {
            return res.status(400).json({ success: false, "message": error?.details[0]?.message, "type": error?.details[0]?.path[0] })
        }
        next()
    }
}