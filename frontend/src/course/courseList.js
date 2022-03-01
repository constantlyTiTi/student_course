import React, { useEffect, useState } from 'react'
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {setCourseInfo} from '../redux/course-redux'
import Course from '../models/course'

const CourseList =()=> {
    const course = useSelector((state) => state.course.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const

}

export default CourseList