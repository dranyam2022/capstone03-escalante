import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Initialize useNavigate
    const navigate = useNavigate()

    // For determining if button is disabled or not
    const [isActive, setIsActive] = useState(false)

    function authenticate(event) {
        event.preventDefault()

        localStorage.setItem('email', email)

        setEmail('')
        setPassword('')

        navigate('/')
    }

    useEffect(() => {
        if ((email !== '' && password !== '')) {
            // Enables the submit button if the form data has been verified
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [email, password])

    return (
        <Form onSubmit={event => authenticate(event)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
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