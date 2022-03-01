import React, { useEffect, useState } from 'react'
import { Table, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link, NavLink} from 'react-router-dom';
import {getCourses} from '../redux/course-redux'
import {Course} from '../models/course'

const courses = [
    {
      code: "COMP01",
      name: "COMP 01",
      section: ["001", "002", "003"],
      semester: "Semester 1",
    },
    {
      code: "COMP02",
      name: "COMP 02",
      section: ["001", "002", "003"],
      semester: "Semester 2",
    },
    {
      code: "COMP03",
      name: "COMP 03",
      section: ["001", "002", "003"],
      semester: "Semester 1",
    },
    {
      code: "COMP04",
      name: "COMP 04",
      section: ["001", "002", "003"],
      semester: "Semester 1",
    },
    {
      code: "COMP05",
      name: "COMP 05",
      section: ["001", "002", "003"],
      semester: "Semester 1",
    },
  ];
const CourseList =()=> {
    // const courses = useSelector((state) => state.courses.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect (()=>{
        // dispatch(getCourses) 

    }, [])


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
                <td><NavLink to={`course/${c.code}`}>{c.code}</NavLink></td>
                <td>{c.name}</td>
                <td>{c.section.join(" / ")}</td>
                <td>{c.semester}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    )

}

export default CourseList