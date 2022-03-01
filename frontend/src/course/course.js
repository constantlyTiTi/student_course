import React, { useEffect, useState } from 'react'
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {Course} from '../models/course'
import {setCourseInfo} from  '../redux/course-redux'

const CourseInfor=(props) => {
    const course = useSelector((state) => state.course.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[courseState, setState] = useState(Course)

    const setCourseCode =(input)=>{
        setState({...courseState, course_code:input})
    }

    const setCourseName = (input)=>{
        setState({...courseState, course_name:input})
    }

    const setSection = (input)=>{
        setState({...courseState, course_name:input})
    }

    const setSemester = (input)=>{
        setState({...courseState, semester:input})
    }

    const formSubmit =(e)=>{
        e.preventDefault()
        dispatch(setCourseInfo(userState))
        navigate("/course")
    }

    return(
        <Form onSubmit={e => formSubmit(e)}>


                    <FloatingLabel label="Student number" className="mb-3" controlId="studentNumber">
                        <Form.Control type="text" placeholder="student number"  onChange={e => setStudentNumber(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-3"controlId="password">
                        <Form.Control type="text" placeholder="password"  onChange={e => setPassword(e.target.value)} />
                    </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

export default CourseInfor