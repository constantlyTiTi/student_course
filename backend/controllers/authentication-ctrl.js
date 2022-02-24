
const Authen = require('../models/student')

signUp = (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'please provide the information'
        })
    }

    const student = new Authen(body)

    if(!student){
        return res.status(400).json({ success: false, error: err })
    }

    student.save()
    .then(() => {
        return res.status(201).json({
            success:true,
            id:student._id,
            message:'sign up successfully'
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message:'sign up failed'
        })
    })
}

login = (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'please provide the username and password'
        })
    }

    if(!body.user_name){
        return res.status(400).json({
            success: false,
            error: 'please provide the username'
        })
    }
    if(!body.password){
        return res.status(400).json({
            success: false,
            error: 'please provide the password'
        })
    }
}

module.exports = {
    signUp,
    login
}