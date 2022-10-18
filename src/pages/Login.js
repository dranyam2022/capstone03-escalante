import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // for determining if button is disabled or not
    const [isActive, setIsActive] = useState(false)
    function loginUser(event) {
        event.preventDefault()
        // clear out all the input fields after form submission
        setEmail('')
        setPassword('')
        alert('you have successfuly Logged in!')
    }
    // console.log(email)
    // console.log(password)
    useEffect(() => {
        if (email !== '' && password !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [email, password])
    return (
        <Form onSubmit={event => loginUser(event)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />

            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
            </Form.Group>
            {isActive ?
                <Button variant="primary" type="submit" id="submitBtn">
                    Submit
                </Button>
                :
                <Button variant="primary" type="submit" id="submitBtn" disabled>
                    Submit
                </Button>
            }

        </Form>
    )
}