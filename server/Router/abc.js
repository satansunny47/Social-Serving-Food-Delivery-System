import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authenticate from '../middleware/authenticate.js';
import cors from "cors";


import '../DB/Connection.js';
import User from '../Models/User/User.js';
import Food from '../Models/Food/Food.js';

router.get('/', (req, res) => {

    res.send("Hello from router");
})
router.post('/register', async (req, res) => {
    const { name, email, phone, latitude, longitude, password, cpassword, type } = req.body;
    if (!name || !email || !phone || !latitude || !longitude || !password || !cpassword || !cpassword) {
        console.log("inside filled not")
        return res.status(422).json({ error: "Fill the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            console.log("inside email exist")

            return res.status(422).json({ error: "Email already exist" })
        }
        else if (password != cpassword) {
            console.log("inside pass not match");
            return res.status(422).json({ error: "password not matching" })
            
        }
        else {
            const user = new User({ name, email, phone, latitude, longitude, password, cpassword, type });
            
            await user.save();
            console.log("User Register Successfully");
            // console.log("here")

            res.status(201).json({ message: "User Register Successfully successfully" })
        }

    } catch (err) {

        res.status(500).json({ error: "Failed to register" })
        console.log(err);
    }
    // res.send("Hello from router");
});
// router.post('/register',(req, res) => { 
//     const {name,email,phone,latitude,longitude,password,cpassword,type} = req.body;
//     if (!name||!email||!phone||!latitude||!longitude||!password||!cpassword||!cpassword) {
//         return res.status(422).json({error: "Fill the field properly"});

//     }
//     User.findOne({email:email})
//     .then((userExists) => {
//         if (userExists) {
//             return res.status(422).json({error: "User already exists"});
//         }

//         const user = new User ({name,email,phone,latitude,longitude,password,cpassword,type}); 



//         user.save().then((success) => {
//             res.status(201).json({message:"User Register Successfully successfully"})
//         }).catch((err) => {
//             res.status(500).json({error:"Failed to register"})
//             console.log(err);
//         })


//     }).catch((err) => {
//         console.log(err);
//     });
//     // res.send("Hello from router");
// });


router.post('/signin', async (req, res) => {
    // console.log(req.body);

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }
        // console.log(await User.find({ 'type': 'ngo' }, 'name email', function (err, ab) {
        //     if (err) {
        //         console.log(err)
        //     }
        // }).clone().catch(function (err) { console.log(err) }));

        const userlogin = await User.findOne({ email: email });
        if (!userlogin) {

            res.status(400).json({ message: "Error while Signing in" });
        }
        else {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            const token = await userlogin.generateAuthToken();

            console.log(token);
            res.cookie("jwt", token,  {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true 
            });
            // console.log("this is my token: "+ cookie);

            console.log("hello1");

            if (!isMatch) {

                console.log("hello2");
                res.status(400).json({ message: "Error while Signing in" });
            }
            else {
                console.log("hello success");
                // res.send(token);

                res.json({ message: "User Sign in successfully",token: token,user:userlogin });
            }
        }
    } catch (err) {
        console.log(err);
    }
})



router.post('/addfood', async (req, res) => {
    
    const { name, price, amount, type, description, restaurant, cat } = req.body;
    console.log(req.body)
    if (!name || !price || !amount || !type || !description || !restaurant || !cat) {
        console.log("here atfield")
        return res.status(422).json({ error: "Fill the field properly" });
    }

    try {
            const food = new Food({ name, price, amount, type, description, restaurant, cat });

            await food.save();
            console.log("here saved")
            console.log("Food added sucessfully");

            res.status(201).json({ message: "Food added successfully"})


    } catch (err) {

        res.status(500).json({ error: "Failed to add food" })
        console.log(err);
    }
    // res.send("Hello from router");
});


router.get('/getrestaurant', async (req, res) => {
    console.log("hello getrstaurant");
    const dat = await User.find({ 'type': 'restaurant' }, 'name email phone', function (err, ab) {
        if (err) {
            console.log(err)
        }
    }).clone().catch(function (err) { console.log(err) })
    console.log(dat);
    console.log("hello here")
    res.send(dat);
})
router.get('/about', authenticate, async (req, res) => {
    console.log("hello profilepage");
    res.send(req.rootUser)
})
router.get('/foodlist', async (req, res) => {
    console.log("hello foodlist");
    const dat = await Food.find({ 'cat': 'food' }, 'name price amount type description restaurant', function (err, ab) {
        if (err) {
            console.log(err)
        }
    }).clone().catch(function (err) { console.log(err) })
    console.log(dat);
    // console.log("hello here")
    res.send(dat);
})
router.get('/ngolist', async (req, res) => {
    console.log("hello ngolist");
    const dat = await User.find({ 'type': 'ngo' }, 'name price amount type description restaurant', function (err, ab) {
        if (err) {
            console.log(err)
        }
    }).clone().catch(function (err) { console.log(err) })
    console.log(dat);
    // console.log("hello here")
    res.send(dat);
})

export default router;