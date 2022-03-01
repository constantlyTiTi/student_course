const Student = require('../models/student')

studentCourseList = async (req, res) => {

    try {
        let result = await Student.findOne({ student_number: req.params.student_number })
        if (!result) {
            return res.status(400).json({ success: false, error: "not found" })
        }

        return res.status(200).json({ success: true, data: result.courses })
    } catch (e) {
        console.log(e)
    }

}

addCourseToStudent = async (req, res) => {

    let student = await Student.findOne({ student_number: req.params.student_number })

    if (student.courses.includes(req.params.course_code)) {
        return res.status(400).json({
            message: 'Course already exist',
        })
    }

    student.courses.push(req.params.course_code)

    await student.save()
        .then((item) => {
            res.status(200).send(item)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
}

module.exports = {
    studentCourseList,
    addCourseToStudent,
}