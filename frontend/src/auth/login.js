import React, { useEffect, useState } from 'react'
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {setUserInfo} from '../redux/auth-redux'
import {Student} from '../models/student'

const Login = (props) => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[userState, setState] = useState(Student)

    const setStudentNumber =(studentNumber)=>{
        setState({...userState, student_number:studentNumber})
    }

    const setPassword = (passwordInput)=>{
        setState({...userState, password:passwordInput})
        console.log(userState)
    }

    const formSubmit =(e)=>{
        e.preventDefault()
        dispatch(setUserInfo(userState))
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

export default Login