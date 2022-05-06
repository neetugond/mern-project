const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')

const app = express();

// to access dotenv we need to give path of file config.env
dotenv.config({ path: './config.env' });

require('./db/conn')

// const User = require('./model/userSchema')

// how to access the connection from env file (process.env.givevaluename)


const PORT = process.env.PORT


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

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})