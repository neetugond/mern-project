const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("hello world from the server")
})

app.get('/about', (req, res) => {
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