const express = require('express')

const courseCtrl = require('../controllers/course-ctrl')

const router = express.Router()

router.post('/course/post', courseCtrl.createCourse)
router.put('/course/post', courseCtrl.updateCourse)
router.delete('/course/:courseId', courseCtrl.deleteCourse)
router.get('/course/:courseId', courseCtrl.getCourse)
router.get('/course/courses', courseCtrl.getCourses)
module.exports = router