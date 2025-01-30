const express = require('express')
const { handleSignup ,handleLogin} = require('../controllers/controller')
const userRouter= express.Router()



userRouter.post("/signup",handleSignup)
userRouter.post("/login",handleLogin)
module.exports= userRouter
