import React, { useEffect, useState } from 'react'
import { Table, Button, FloatingLabel, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link, NavLink} from 'react-router-dom';
import {getCourses} from '../redux/course-redux'
import {Course} from '../models/course'

const CourseList =()=> {
    const courses = useSelector((state) => state.course.courses)
    const loading = useSelector((state) => state.course.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(courses, loading)
    useEffect (()=>{
      if(courses?.length === 0){
        dispatch(getCourses()) 
      }
       
    }, [])

    if(!courses || loading){
      return <Spinner animation="border" role="status" />
    }

    return(
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Section</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr>
                <td><NavLink to={`course/${c.course_code}`}>{c.course_code}</NavLink></td>
                <td>{c.course_name}</td>
                <td>{c.section}</td>
                <td>{c.semester}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    )

}

export default CourseList