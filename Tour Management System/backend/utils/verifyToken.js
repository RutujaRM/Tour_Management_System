import jwt from 'jsonwebtoken';


// Token Verification
export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(401).json({ success: false, message: "You're not Authorize" })
    }

    //if token is exist then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Token is invalid" });
        }
          req.user = user
          next();      //After execution of this call ton next method or pass control to next 

    })
}


// User Verification
export const verifyUser = (req,res,next) =>
{
     verifyToken(req,res,next, () =>
    {
         if(req.user.id === req.params.id || req.user.role ==="admin")
         {
            next();
         }
         else{
           return res.status(401).json({success:false , message:"You're not Authenticated"});
         }
    });
};




// Admin Verification
export const verifyAdmin = (req,res,next) =>
    {
      console.log(req.user.role);
         verifyToken(req,res,next, () =>
        {
             if(req.user.role ==="admin")
             {
                next();
             }
             else{
               return res.status(401).json({success:false , message:"You're not Authorized"});
             }
        });
    };
    
    