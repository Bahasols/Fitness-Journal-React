import logo from "./logo.svg";
import "./App.css";

import { Dashboard } from "./Components/Dashboard";
import { WorkoutList } from "./Components/WorkoutList";
import { Journal } from "./Components/Journal";
import { Motivation } from "./Components/Motivation";
import Login from "./Components/Login";
import { Nutrition } from "./Components/Nutrition";
import { PreviousJournalEntry } from "./Components/PreviousJournalEntry";
import { Resources } from "./Components/Resources";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthProvider } from "./Contexts/AuthContext";
import { WorkoutForm } from "./Components/WorkoutForm";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <br />
      <Navbar bg="primary" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand className="mr-auto" as={Link} to="/">
            Fitness Journal
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/Journal">
              Journal
            </Nav.Link>
            <Nav.Link as={Link} to="/Nutrition">
              Nutrition
            </Nav.Link>
            <Nav.Link as={Link} to="/WorkoutForm">
              Add Workout
            </Nav.Link>
            <Nav.Link as={Link} to="/Resources">
              Resources
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Journal" element={<Journal />} />
              <Route path="/Nutrition" element={<Nutrition />} />
              <Route path="/Motivation" element={<Motivation />} />
              <Route path="/WorkoutForm" element={<WorkoutForm />} />
              <Route
                path="/PreviousJournalEntry"
                element={<PreviousJournalEntry />}
              />

              <Route path="/Resources" element={<Resources />} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </>
  );
}

export default App;
