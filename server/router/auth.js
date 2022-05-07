const express = require('express');

const router = express.Router();

const User = require('../model/userSchema')

// router.get('/', (req, res) => {
//     res.send("hello from router")
// })

// // using promises
// router.post("/register", (req, res) => {
//      // array destructring to avoid req.body.name
//     const { name, email, phone, work, password, cpassword } = req.body
// // if any of the details missing error show
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "plz filled the field properly" });
//     }
// // if email is already exist error show
//     User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exist" })
//         }
//         // if not exist create a new user
//         const user = new User({ name, email, phone, work, password, cpassword });
// // save the data on atlas
//         user.save().then(() => {
//             res.status(201).json({ message: "user registered successfully" });
//         }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
//     }).catch(err => {console.log(err)})
// })

// using async await
router.post("/register", async (req, res) => {
    // array destructring to avoid req.body.name 
    const { name, email, phone, work, password, cpassword } = req.body
    // if any of the details missing error show 
    // validation
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled the field properly" });
    }
    
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" })
        }
        const user = new User({ name, email, phone, work, password, cpassword });

        // this

        await user.save();

        res.status(201).json({ message: "user registered successfully" });


    } catch (err) {
        console.log(err);
    }
})

// login

router.post("/signin", async (req, res) => {
    // console.log(req.body);
    // res.json({message:"awesome"})
    
     try {
        const {email,password} = req.body
   
        if (!email || !password) {
            return res.status(400).json({ error: "plz filled the field properly" });
        }
      const userLogin = await User.findOne({ email: email})
    //   console.log('userLogin:', userLogin)
        if (!userLogin) {
            res.status(400).json({ error: "user error" });
        } else {
            res.status(200).json({ message : "user signin successfully" }); 
        }
     


     } catch (err) {
        console.log(err);
     }
})

 module.exports = router