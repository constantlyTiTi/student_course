import React, { useEffect, useState } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCourse, setCourseInfo } from "../redux/course-redux";

const Course = (props) => {
  const { course, loading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    const getCourse = async (code) => {
      const courseWithStudents = await dispatch(getCourse(code));
    };
    console.log(code);
    if(code!==course?.course_code)getCourse(code);
  }, [code, course?.course_code, dispatch]);

  const navigate = useNavigate();
  if(loading) return <Spinner animation="border" role="status" />
  return (
    <Card>
      <Card.Header>{course.course_name}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
          <Form>
            {course.section.map((section) => (
              <div key={`default-${section}`} className="mb-3">
                <Form.Check
                  type="radio"
                  id={`default-${section}`}
                  label={section}
                />
              </div>
            ))}
          </Form>
        </Card.Text>
        <Button variant="primary">Add Course</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
