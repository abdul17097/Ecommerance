const UserModel = require('../Model.js/UserSchema')
const jwt = require('jsonwebtoken')




const authentication = async (req,res,next)=>{
    let token
    const {authorization} = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try {
            token = authentication.split(" ")[1]
            // Verify Token
            const {userID} = jwt.verify(token,process.env.JWT_SECRET)
            // Get user from Token
            req.user = await UserModel.findById(userID).select("-password")
            next()
        } catch (error) {
            res.status(401).send({"status":"faild","message":"Unauthorized User"})
        }
    }if(!token){
        res.status(401).send({"status":"faild","message":"Unauthorized User","token":"No Token"})

    }
}