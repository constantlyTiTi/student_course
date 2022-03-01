import React, { useEffect, useState } from 'react'
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {getCourses} from '../redux/course-redux'
import {Course} from '../models/course'

const CourseList =()=> {
    const courses = useSelector((state) => state.courses.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect (()=>{
        dispatch(getCourses) 

    }, [])

    const courseListNode = courses.map(i=>{
        React.createElement()
    })

    return(

        <>
        <div ref={this.courseListRef}>

        </div>
        </>
    )

}

export default CourseList