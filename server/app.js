const mongoose = require('mongoose')
const express = require('express')

const app = express();

const DB = "mongodb+srv://neetugond:neetugond@cluster0.smcfd.mongodb.net/mernstack?retryWrites=true&w=majority";

// this return promise so for fullfilling the promise we use .then
mongoose.connect(DB).then(() => {
    console.log("connection successful")
}).catch((err) => {
    console.log("no connection")
})

// middleware = if user is not login redirect to the login page, if login redirect to about page

const middleware = (req, res, next) => {
    console.log("hello from middleware")
    next();
    
}

app.get('/', (req, res) => {

    res.send("hello world from the server")
})

app.get('/about', middleware, (req, res) => {
    console.log("about")
    res.send("hello world from the about")
})

app.get('/contact', (req, res) => {
    res.send("hello world from the contact")

})

app.get('/login', (req, res) => {
    res.send("hello world from the login page")

})

app.get('/signup', (req, res) => {
    res.send("hello world from the signup page")

})
// console.log("this is my first mern project")

app.listen(3000, () => {
    console.log('server is running at port 3000')
})