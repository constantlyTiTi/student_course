const express = require('express')

const courseCtrl = require('../controllers/course-ctrl')

const router = express.Router()

router.post('/course/post', courseCtrl.createCourse)
router.put('/course/post', courseCtrl.updateCourse)
router.delete('/course/:course_code', courseCtrl.deleteCourse)
router.get('/course/:course_code', courseCtrl.getCourse)
router.get('/course/courses', courseCtrl.getCourses)
router.put('/course/:course_code/student_numnber/:student_numnber', courseCtrl.addStudentToCourse)
module.exports = router