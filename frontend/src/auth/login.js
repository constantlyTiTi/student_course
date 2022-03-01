import React, { useEffect, useState } from 'react'
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,useLocation} from 'react-router-dom';
import {setUserInfo} from '../redux/auth-redux'
import {Student} from '../models/student'
import {useAuth} from '../auth/useAuth'

const Login = (props) => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    // let auth = useAuth()

    const[userState, setState] = useState(Student)

    const setStudentNumber =(studentNumber)=>{
        setState({...userState, student_number:studentNumber})
    }

    const setPassword = (passwordInput)=>{
        setState({...userState, password:passwordInput})
        console.log(userState)
    }
    let from = location.state?.from?.pathname || "/";
    const formSubmit =(e)=>{
        e.preventDefault()
        dispatch(setUserInfo(userState))
        navigate(from, { replace: true });
        // navigate("/course")
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