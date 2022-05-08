const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

// document structure defined
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})
    


// middleware pre method run before save method from auth.js

// it will return promise that why async
userSchema.pre('save', async function (next) {
   //modified only password
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12); //12 round salt
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
       
    }
    next()
})

// now we need to attach this document with our project we can do that with the help of model = collection create

// first letter should be capital letter USER - name of the collection which we are creating it will automatically become plural in database userSchema- document structure which we created above

// connected document with collection
const User = mongoose.model("USER", userSchema)

module.exports = User;

