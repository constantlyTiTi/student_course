const express = require('express')

const courseCtrl = require('../controllers/course-ctrl')

const router = express.Router()

router.post('/post', courseCtrl.createCourse)
router.put('/post', courseCtrl.updateCourse)
router.delete('/:course_code', courseCtrl.deleteCourse)
router.get('/:course_code', courseCtrl.getCourse)
router.get('/courses', courseCtrl.getCourseList)
router.put('/:course_code/student_numnber/:student_numnber', courseCtrl.addStudentToCourse)
module.exports = router