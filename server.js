require("dotenv").config()
const express = require('express')
const app = express()
const bookmarkController = require('./controllers/bookmarkController')
const PORT = process.env.PORT || 7050
const morgan = require('morgan')
const cors = require("cors")

//Middleware 
app.use(cors()) //this allow the frontend to acess data from the backend
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/bookmark', bookmarkController)
app.listen(PORT, () => console.log('hello from the server side', PORT))