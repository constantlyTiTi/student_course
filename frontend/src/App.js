import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './auth/login'
import SignUp from './auth/signup'
import Course from './course/course'
import Thankyou from './course/thankyou'
import { Container, Navbar, Nav, Link, Brand } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Items />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="course" element={<Course/>}/>
          <Route path="thankyou" element={<Thankyou/>}/>
          </Route>

        </Routes>
      </Router>
    </div>

  );
}

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Login</Navbar.Brand>
          <Navbar.Brand href="/signup">Sign up</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          <Nav path="course" element={<Course/>}/>
          <Nav path="thankyou" element={<Thankyou/>}/>
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
