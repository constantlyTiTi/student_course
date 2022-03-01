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

    if (!course) {
        return res.status(400).json({ success: false, error: err })
    }

    course.save()
    .then(()=>{
        return res.status(201).json({
            success: true,
            id: movie._id,
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

getCourse = (req, res) => {
    await Course.findOne({ course_code: req.params.course_code }, (err, course) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: course })
    }).catch(err => console.log(err))
}

addStudentToCourse = (req, res) => {
    let courseGet = {}
    await Course.findOne({ course_code: req.params.course_code, student_number:req.params.student_number}, (err, course) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if(course.students.contains(student_number)){
            return res.status(400).json({ success: false,  message: 'already exist' })
        }
       
        course.students.push(student_number)
        
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
    }).catch(err => console.log(err))

    courseGet.students.push(student_number)

}

getCourseList = (req, res) => {
    await Course.find({}, (err, courses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!courses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }
        return res.status(200).json({ success: true, data: courses })
    }).catch(err => console.log(err))
}

deleteCourse = (req, res) => {
    await Course.findOneAndDelete({ course_code: req.params.course_code }, (err, course) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!course) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }

        return res.status(200).json({ success: true, data: course })
    }).catch(err => console.log(err))
}

updateCourse = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Course.findOne({ _id: req.params.courseId }, (err, course) => {
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