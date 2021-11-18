const mongoose = require('mongoose')


let studentSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    age: Number,
    phone: Number
})

let Student = mongoose.model('student', studentSchema)

let uri = 'mongodb://localhost:27017/university'

exports.testConnect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(() => {
            mongoose.disconnect()
            resolve('Connected !')
        }).catch((err) => {
            reject(err)
        })
    })
}