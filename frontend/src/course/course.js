import React, { useEffect, useState } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCoursesByCode, addCourseToStudent, addStudentToCourse } from "../redux/course-redux";

const Course = (props) => {
  const { courses, loading } = useSelector((state) => state.course);
  const { user, token } = useSelector((state) => state.user);
  let selectedSection = "";
  const dispatch = useDispatch();
  const { course_code } = useParams();
  useEffect(() => {
    const getCourse = async (course_code) => {
      let result = await dispatch(getCoursesByCode(course_code));
    };
    getCourse(course_code)
  }, []);

  function setSelectedSection(id){
    selectedSection = id
  }

  function addCourseStudent(){

    const runFunc = async ()=>{
      if(selectedSection){
        await dispatch(addCourseToStudent({"course_id":selectedSection, "student_id":user._id, "token": token}))
        await dispatch(addStudentToCourse({"course_id":selectedSection, "student_id":user._id, "token": token}))
      }
    };

    runFunc()
  }
  const navigate = useNavigate();
  if (loading || courses?.length === 0) return <Spinner animation="border" role="status" />
  return (
    <Card>
      <Card.Header>{courses[0].course_name}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
          <Form>
            {

              courses.map(i =>
              (
                <Form.Check type="radio" name={i.course_code} 
                value={i._id} label={`${i.students.some(s => s._id == user._id) ? "default" : ""} ${i.section}`} 
                onClick={()=>setSelectedSection(i._id)}/>
              ))
            }
          </Form>
        </Card.Text>
        <Button variant="primary" onClick={()=> addCourseStudent()}>Add Course</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
