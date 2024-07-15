import User from './../models/User.js'   
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// 1) User Registration
export const register = async (req, res) => {
    try {

        //Hashing Password
        const salt = bcrypt.genSaltSync(10);   // This method  mixed the random numbers with passwords
        const hash = bcrypt.hashSync(req.body.password, salt);  // This method generate the Hash password using the user given password and generate salt using

        const newUser = new User(
            {
                username: req.body.username,
                email: req.body.email,
                password: hash,          //create data in hash format
                photo: req.body.photo
            });
        await newUser.save();
        res.status(200).json({ success: true, message: "Successfully Created" })
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" })

    }
};


// 2) User Login
export const login = async (req, res) => {
   
    const email = req.body.email;   // This taking the email from the request body

    try {
        const user = await User.findOne({email}); // find that email

        //If user Doesn't Exist
         if(!user)
         {
           return res.status(404).json({success:false , message:"User not found"});
         } 
         
        
        //If user is exist then check the password or compare the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password , user.password);

        if(!checkCorrectPassword)  //! if body passed password and user stored password while registration not match then throw Error
        {
            return res.status(401).json({success:false , message:"Incorrect Email or Password"});
        }

        const {password,role,  ...rest } = user._doc
    
        // create jwt token
        const token = jwt.sign(
            {id: user._id , role:user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15d"}
        );

        //set token in the browser cookies and send the response to the client
        res.cookie('accessToken' , token,
        {
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({token , data:{ ...rest},role, })
    }
    catch (err) 
    {
        res.status(500).json({ success: false, message: "Failed to Login " });

    }
}