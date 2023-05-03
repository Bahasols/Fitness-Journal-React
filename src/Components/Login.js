import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useNavigate();
  const { currentUser, setCurrentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // console.error(e);
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);

          history("/");
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to sign in");
        });
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <br />
            <Button
              disabled={loading}
              className="w-100 text-center"
              type="submit"
            >
              Sign In
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
