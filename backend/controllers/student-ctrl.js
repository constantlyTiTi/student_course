const Student = require('../models/student')

studentCourseList = async (req, res) => {
    try{
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET)
    }catch(e){
        if (e instanceof jwt.JsonWebTokenError) {
			return res.status(401).end()
		}
		return res.status(400).end()
    }

    try {
        let result = await Student.findOne({ _id: req.params.student_id })
        if (!result) {
            return res.status(400).json({ success: false, error: "not found" })
        }

        return res.status(200).json({ success: true, data: result.courses })
    } catch (e) {
        console.log(e)
    }

}

addCourseToStudent = async (req, res) => {
    try{
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET)
    }catch(e){
        if (e instanceof jwt.JsonWebTokenError) {
			return res.status(401).end()
		}
		return res.status(400).end()
    }

    let student = await Student.findOne({ _id: req.params.student_id })

    if (student.courses.includes(req.params.course_id)) {
        return res.status(400).json({
            message: 'Course already exist',
        })
    }

    student.courses.push(req.params.course_id)

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