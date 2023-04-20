import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Dashboard} from './Components/Dashboard';
import {Exercise} from './Components/Exercise';
import {Journal} from './Components/Journal';
import {Motivation} from './Components/Motivation';
import {Login} from './Components/Login';
import {Nutrition} from './Components/Nutrition';
import {PreviousJournalEntry} from './Components/PreviousJournalEntry';
import {Resources} from './Components/Resources';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
    
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboardd</Nav.Link>
            <Nav.Link href="Journal">Journal</Nav.Link>
            <Nav.Link href="Nutrition">Nutrition</Nav.Link>
            <Nav.Link href="Exercise">Exercise</Nav.Link>
            <Nav.Link href="Resources">Resources</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    



    
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
