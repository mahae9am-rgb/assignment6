const {Router}= require('express')
const  authRouter= Router()
const authController = require('./auth.controller.js')

authRouter.post('/authors',authController.addAuthor)
module.exports = authRouter