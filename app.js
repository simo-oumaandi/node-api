const express = require('express')
const studentRouter = require('./routers/student.router')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', studentRouter)

app.listen(3000, ()=>console.log('Server Running !'))