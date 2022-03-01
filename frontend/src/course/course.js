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
        dispatch(setCourseInfo(courseState))
        navigate("/course")
    }

    return(
        <Form onSubmit={e => formSubmit(e)}>


                    <FloatingLabel label="Course code" className="mb-3" controlId="code">
                        <Form.Control type="text" placeholder="student number"  onChange={e => setCourseCode(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Course name" className="mb-3"controlId="name">
                        <Form.Control type="text" placeholder="password"  onChange={e => setCourseName(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Section" className="mb-3"controlId="section">
                        <Form.Control type="text" placeholder="password"  onChange={e => setSection(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Semester" className="mb-3"controlId="semester">
                        <Form.Control type="text" placeholder="password"  onChange={e => setSemester(e.target.value)} />
                    </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

export default CourseInfor