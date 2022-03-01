const express = require('express')

const studentCtrl = require('../controllers/student-ctrl')

const router = express.Router()

router.get('/:student_number/studentCourseList', studentCtrl.studentCourseList)
router.put('/student_number/:student_number/course_code/:course_code', studentCtrl.addCourseToStudent)

module.exports = router