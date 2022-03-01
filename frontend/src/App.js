import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './auth/login'
import SignUp from './auth/signup'
import Course from './course/course'
import CourseList from './course/courseList'
import Thankyou from './course/thankyou'
import { Container, Navbar, Nav, Link, Brand } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import {useSelector } from "react-redux";
import SelectedCourses from './course/selectedCourses';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route index element={<Items />} /> */}

            <Route path="/" element={<CourseList/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/selectedcourses" element={<SelectedCourses />} />
            <Route path="/course/:course_id" element={<Course />}/>
            {/* <Route path="/course-list" element={<CourseList/>}/> */}
            <Route path="thankyou" element={<Thankyou/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  const user = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.user.token)
  if(token){
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/selectedcourses">{user.first_name} {user.last_name}</Navbar.Brand>
            <Navbar.Brand href="/logout">log out</Navbar.Brand>
            <Nav path="course-list" element={<CourseList/>}/>
            <Nav className="me-auto">
            </Nav>
            {/* <Nav path="course-list" element={<CourseList/>}/>
            <Nav path="course" element={<Course/>}/>
            <Nav path="thankyou" element={<Thankyou/>}/> */}
          </Container>
        </Navbar>
        <Container className='mt-3 col-5'>
          {/* <h1>child</h1> */}
          <Outlet />
        </Container>
  
      </>
    );
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/login">Login</Navbar.Brand>
          <Navbar.Brand href="/signup">Sign up</Navbar.Brand>
          <Nav path="course-list" element={<CourseList/>}/>
          <Nav className="me-auto">
          </Nav>
          {/* <Nav path="course-list" element={<CourseList/>}/>
          <Nav path="course" element={<Course/>}/>
          <Nav path="thankyou" element={<Thankyou/>}/> */}
        </Container>
      </Navbar>
      <Container className='mt-3 col-5'>
        {/* <h1>child</h1> */}
        <Outlet />
      </Container>

    </>
  );
}

export default App;
