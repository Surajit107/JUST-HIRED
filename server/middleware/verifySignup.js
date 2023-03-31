const {userModel} = require('../model/user')

exports.checkDuplicateEntries = async (req, res, next) => {
    console.log("duplicate chk=>", req.body);
    const { email, phone } = req.body
    try{
        // email check
        const existedEmail = await userModel.findOne({ email: email });
        if (existedEmail) {
            return res.status(404).json({ success: false, msg: `${email} already exsists` })
        }

        // phone Check
        const existedPhone = await userModel.findOne({ phone: phone });
        if (existedPhone) {
            return res.status(404).json({ success: false, msg: `${phone} already exsists` })
        }

        next()
    }catch(exc){
        return res.status(404).json({ error: true, msg: exc })
    }

    
}