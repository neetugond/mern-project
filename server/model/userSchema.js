const mongoose = require('mongoose')

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
    
// now we need to attach this document with our project we can do that with the help of model = collection create

// first letter should be capital letter USER - name of the collection which we are creating it will automatically become plural in database userSchema- document structure which we created above

// connected document with collection
const User = mongoose.model("USER", userSchema)

module.exports = User;

