const Course = require('../models/course')

createCourse = (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'please provide the information'
        })
    }

    const course = Course(body)

    //todo
}

getCourse = (req, res) => {

    //todo
}

getCourseList = (req, res) => {

    //todo
}

deleteCourse = (req, res) => {


    //todo
}

updateCourse = (req, res) => {


    //todo
}

module.exports = {
    createCourse,
    getCourse,
    getCourseList,
    deleteCourse,
    updateCourse
}