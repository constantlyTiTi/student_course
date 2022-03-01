const express = require('express')

const courseCtrl = require('../controllers/course-ctrl')

const router = express.Router()

router.post('/post', courseCtrl.createCourse)
router.put('/post', courseCtrl.updateCourse)
router.delete('/:course_code', courseCtrl.deleteCourse)
router.get('/:course_code', courseCtrl.getCourse)
router.get('/courses/all', courseCtrl.getCourseList)
router.put('/:course_code/student_number/:student_number', courseCtrl.addStudentToCourse)
module.exports = router