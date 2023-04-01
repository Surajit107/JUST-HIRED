module.exports = (validator) => {
    return (req, res, next) => {
        const { error } = validator(req.body)
        console.log("error=>", error.details[0]);
        if (error) {
            return res.status(400).send({"message": error.details[0].message, "type": error.details[0].path[0]})
        }
        next()
    }
}