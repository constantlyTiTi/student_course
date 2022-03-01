const express = require('express')

const studentCtrl = require('../controllers/student-ctrl')

const router = express.Router()

router.get('/:student_id/studentCourseList', studentCtrl.studentCourseList)
router.put('/:student_id/course_id/:course_id', studentCtrl.addCourseToStudent)

module.exports = router