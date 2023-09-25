require("dotenv").config()
const express = require('express')
const app = express()
const bookmarkController = require('./controllers/bookmarkController')
const PORT = process.env.PORT || 7050
const morgan = require('morgan')

//Middleware 
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))

app.use('/bookmark', bookmarkController)
app.listen(PORT, () => console.log('hello from the server side', PORT))