import logo from './logo.svg';
import './App.css';

import {Link, Route, Routes} from "react-router-dom";
import {Dashboard} from './Components/Dashboard';
import {Exercise} from './Components/Exercise';
import {Journal} from './Components/Journal';
import {Motivation} from './Components/Motivation';
import Login from './Components/Login';
import {Nutrition} from './Components/Nutrition';
import {PreviousJournalEntry} from './Components/PreviousJournalEntry';
import {Resources} from './Components/Resources';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthProvider } from './Contexts/AuthContext';






function App() {
  return (
    <>
        

        
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="mr-auto" as={Link} to="/">Fitness Journal</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/Journal">Journal</Nav.Link>
            <Nav.Link as={Link} to="/Nutrition">Nutrition</Nav.Link>
            <Nav.Link as={Link} to="/Exercise">Exercise</Nav.Link>
            <Nav.Link as={Link} to="/Resources">Resources</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <br />
      <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
        <Login/>
        </div>
      </Container>

      </AuthProvider>
      
    



    
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Journal" element={<Journal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/Motivation" element={<Motivation />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/PreviousJournalEntry" element={<PreviousJournalEntry />} />
        <Route path="/Resources" element={<Resources />} />

      </Routes>
      </>
  );
}

export default App;
