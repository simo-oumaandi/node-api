const router = require('express').Router()
const studentModel = require('../models/student.model')

router.get('/', (req, res) => {
    studentModel.testConnect().then((msg) => {
        res.send(msg)
    }).catch((err) => {
        res.send(err)
    })
})


module.exports = router