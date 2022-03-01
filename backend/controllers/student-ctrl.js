const Student = require('../models/student')

studentCourseList = async (req, res) => {

    await Student.findOne({ student_number: req.params.student_number }, (err, student) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: student.courses })
    }).catch(err => console.log(err))
}

addCourseToStudent = async (req, res) => {

    let student =  await Student.findOne({ student_number: req.params.student_number })

    if(student.courses.contains(req.params.course_code)){
        return res.status(400).json({
            error,
            message: 'Course already exist',
        })
    }

    student.courses.add(req.params.course_code)

    student.save()
}

module.exports = {
    studentCourseList,
    addCourseToStudent
}