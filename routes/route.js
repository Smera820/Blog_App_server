const express = require('express')
const { handleSignup } = require('../controllers/controller')
const userRouter= express.Router()



userRouter.post("/signup",handleSignup)
module.exports= userRouter
