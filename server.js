require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const PORT = 3001
const Todo = require('./client/models/Todo')
const todoexample = require('./client/models/todoexample')

app.use(cors())
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.get('/', (req, res)=> {
    res.send("<h1>Hello To-do list</h1>")
})

app.post('/create', (req, res)=> {
    console.log(req.body)
})



// error page
app.get('*', (req, res) => {
    res.redirect('404')
})

// Tell the app to listen on port 3000
app.listen(3001, () => {
    console.log(`Server running on  port: ${PORT}`);
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})
