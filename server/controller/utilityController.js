const Utility = require("../model/utility");


exports.allUtility = async (req, res)=>{
    try{
        
    }catch(exc){
        return res.status(400).json({ error: true, message: exc.message });
    }
}