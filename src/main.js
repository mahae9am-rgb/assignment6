const express = require('express')
const {connectDB}= require('./common/db/mongodb.js')
const bookRouter = require('../src/app/book/book.route')
const authRouter= require('../src/app/auth/auth.route.js')
const logRoute = require('../src/app/log/log.route.js')
connectDB()
const app = express()

app.use(express.json())

app.use('/collection',bookRouter)
app.use('/',bookRouter)
app.use('/logs',logRoute)
app.use('/collection',authRouter)
app.use('/collection',logRoute)
app.use('/',logRoute)
app.use('/books',bookRouter)
app.use('/',bookRouter)
app.listen(9000,()=>{
    console.log('port running 9000');
})
