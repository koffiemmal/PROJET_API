/* const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        return res.status(401).send({msg:"No token provided"})
    }
    let token=authHeader.split(' ')[1]
    //console.log(token)
    jwt.verify(token,"secret",(err,decoded)=>{
        if(err) {
            return res.status(500).send({msg: "Invalid Token"});
        }
        req.user_id = decoded.id
        next()
    })} */