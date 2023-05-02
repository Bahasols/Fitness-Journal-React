// Define the Signup component, which is a form for users to sign up for the application
import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext'

export default function Signup() {
    // Use the useRef() hook to create references to the input fields in the form
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // Use the useAuth() hook to access the authentication context, which provides the signup function that creates a new user account in Firebase with the email and password provided by the user
    const { signup } = useAuth();

    // Define the handleSubmit() function, which is triggered when the form is submitted, and calls the signup() function with the email and password values entered by the user
    function handleSubmit(e) {
        e.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value);
    }

    // Render the Signup component, which displays a form for users to sign up for the application
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <br />
                        <Button className="w-100 text-center" type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">Already have an account? Log in</div>
                </Card.Body>
            </Card>
        </>
    )
}
