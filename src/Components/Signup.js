import React, { useState, useRef } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            // console.error(e);
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => { console.log(userCredential) })
                .catch((error) => { console.log(error) });

        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>

                    <h2 className='text-center mb-4'>Sign up</h2>
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

                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} className="w-100 text-center" type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">Already have an account? Log in</div>
                </Card.Body>
            </Card>
        </>
    )

}