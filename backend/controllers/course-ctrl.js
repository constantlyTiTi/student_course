const Course = require('../models/course')
const jwt = require("jsonwebtoken")

createCourse = async (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'please provide the information'
        })
    }

    const course = Course(body)

    if (!course) {
        return res.status(400).json({ success: false, error: err })
    }

    await course.save()
    .then((item)=>{
        return res.status(201).json({
            success: true,
            id: item._id,
            message: 'Course created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Course not created!',
        })
    })
}

getCourse = async (req, res) => {
    let result = await Course.findOne({ _id: req.params.course_id })
    if(!result){
        return res.status(400).json({ success: false, error: "not found" }) 
    }
    return res.status(200).json({ success: true, data: result })
}

addStudentToCourse = async (req, res) => {
    let course = await Course.findOne({ _id: req.params.course_id})

    if(!course){
        return res.status(400).json({ success: false, error: "not found" })
    }

    let student_id = req.params.student_id

    if(course.students.some(i=>i._id === student_id)){
        return res.status(400).json({ success: false,  message: 'already exist' })
    }

    course.students.push(student_id)
        
     await course
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: course._id,
                    message: 'Course updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Course not updated!',
                })
            })

}

getCourseList =async (req, res) => {
    
    await Course.find({}, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!items.length) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }
        return res.status(200).json({ success: true, data: items })
    }).catch(err => console.log(err))

}

deleteCourse =async (req, res) => {
    Course.findOneAndDelete({_id: req.params.course_id }, function (err, docs) {
        if (err){
            return res
                    .status(400)
                    .json({ success: false, error: err })
        }
        else{
            return res.status(200).json({ success: true, data: docs })
        }
    });
}

updateCourse =async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Course.findOne({ _id: body.course_id }, (err, course) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Course not found!',
            })
        }
        course.course_code = body.course_code
        course.course_name = body.course_name
        course.section = body.section
        course.semester = body.semester
        
        course
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: course._id,
                    message: 'Course updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Course not updated!',
                })
            })
    })
}

module.exports = {
    createCourse,
    getCourse,
    getCourseList,
    deleteCourse,
    updateCourse,
    addStudentToCourse
}