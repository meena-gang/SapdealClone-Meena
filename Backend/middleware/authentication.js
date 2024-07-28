const jwt = require('jsonwebtoken');

const authentication=(req,res,next)=>
{
    const token=req.headers.token

    jwt.verify(token,"auth",(err,decoded)=>
    {
        if(err)
        {
            res.send("Login Frist")
        }
        else
        {
            req.body.id=decoded.id  
            next()
       }

    })
}
module.exports=authentication