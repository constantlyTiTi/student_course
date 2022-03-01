const express = require('express')

const studentCtrl = require('../controllers/student-ctrl')

const router = express.Router()

router.get('/studentCourseList', studentCtrl.studentCourseList)
router.put('/student_number/:student_number/course_code/:course_code', studentCtrl.addStudentToCourse)

module.exports = router