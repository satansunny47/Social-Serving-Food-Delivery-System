import jwt from 'jsonwebtoken'
import User from '../Models/User/User.js'
const Authenticate = async (req, res,next) => {
    
    try {
        console.log("in authenticate");
        console.log(req.cookies)
        const token = req.cookies.jwt;
        console.log("token is: " + token);
        const verifytoken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id: verifytoken._id,"tokens.token":token});
        if(!rootUser){throw new Error("User not found")}
        
             req.token=token;
            req.rootUser=rootUser;
            req.userID=rootUser._id;
        
        next();

    }catch(err) {
        res.status(401).send('Unauthorized');
        console.error(err)
    }

}
export default Authenticate;