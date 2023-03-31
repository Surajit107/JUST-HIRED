const User = require('../model/user')

exports.checkDuplicateEntries = async (req, res, next) => {
    console.log("duplicate chk=>", req.body);
    const { email, phone, password, confPassword } = req.body

    const check_email = await User.findOne({ email: email })
    const check_phone = await User.findOne({ phone: phone })

    if (check_email) {
        return res.status(404).json({ success: false, msg: `${check_email} already exsists` })
    } else if (check_phone) {
        return res.status(404).json({ success: false, msg: `${check_phone} already exsists` })
    } else if (password !== confPassword) {
        return res.status(404).json({ success: false, msg: "Password didn't matched \n Please try again" })
    }

    return next()
}