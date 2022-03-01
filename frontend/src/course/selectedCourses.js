import React, { useEffect, useState } from "react";
import { Table, Button, FloatingLabel, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Course } from "../models/course";
import { getStudentCourses } from '../redux/course-redux'

const SelectedCourses = () => {

  const courses = useSelector((state) => state.course.courses)
  const user = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.user.token)
  const loading = useSelector((state) => state.course.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(user, loading)
  useEffect(() => {
    if (courses?.length === 0) {
      dispatch(getStudentCourses(user._id, token))
    }

  }, [])

  if (!courses || loading) {
    return <Spinner animation="border" role="status" />
  }

  return (
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
            <td>{c.course_code}</td>
            <td>{c.crouse_name}</td>
            <td>{c.section}</td>
            <td>{c.semester}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SelectedCourses;
