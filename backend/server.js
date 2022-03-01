require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',()=> console.log('Connect to database'))

app.use(express.json())

const authenRouter = require('./routes/authen-router')
app.use('/authen',authenRouter )

// const courseRouter = require('./routes/course-router')
// app.use('/course',courseRouter )

app.listen(5000,()=> console.log('Server Started'))