require("dotenv").config()
const express = require('express')
const app = express()
// const bookmarkedController = require('./controller/bookmarkedController')
const PORT = process.env.PORT || 7050
const morgan = require('morgan')

//Middleware 
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))

// app.use('/bookmark', bookmarkedController)
app.listen(PORT, () => console.log('hello from the server side', PORT))