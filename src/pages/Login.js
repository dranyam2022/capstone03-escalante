import { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom'
import UserContext from '../UserContext'

export default function Login() {
    // Initializes the use of the properties from the UserProvider in App.js file
    const { user, setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Initializes useNavigate()
    const navigate = useNavigate()

    // for determining if button is disabled or not
    const [isActive, setIsActive] = useState(false)

    function authenticate(event) {
        event.preventDefault()

        localStorage.setItem("email", email)

        setUser({
            email: localStorage.getItem('email')
        })

        setEmail("")
        setPassword("")

        navigate("/")
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
        (user.email !== null) ?
            <Navigate to="/courses" />
            :
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

