const express = require('express');

const router = express.Router();

const User = require('../model/userSchema')

// router.get('/', (req, res) => {
//     res.send("hello from router")
// })

router.post("/register", (req, res) => {
     // array destructring to avoid req.body.name 
    const { name, email, phone, work, password, cpassword } = req.body
// if any of the details missing error show
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled the field properly" });
    }
// if email is already exist error show
    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" })
        }
        // if not exist create a new user
        const user = new User({ name, email, phone, work, password, cpassword });
// save the data on atlas
        user.save().then(() => {
            res.status(201).json({ message: "user registered successfully" });
        }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
    }).catch(err => {console.log(err)})
})
 module.exports = router