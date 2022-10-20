import { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function Login() {
    // Initializes the use of the properties from the UserProvider in App.js file
    const { user, setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Initializes useNavigate()
    const navigate = useNavigate()

    // for determining if button is disabled or not
    const [isActive, setIsActive] = useState(false)

    const retrieveUser = (token) => {
        fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)

                // Store the user details retrieved from the token into the global user state
                setUser({
                    id: result._id,
                    isAdmin: result.isAdmin
                })
            })
    }

    function authenticate(event) {
        event.preventDefault()

        fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(result => {
                if (typeof result.accessToken !== "undefined") {
                    localStorage.setItem('token', result.accessToken)

                    retrieveUser(result.accessToken)

                    Swal.fire({
                        title: 'Login Successful!',
                        icon: 'success',
                        text: 'Welcome to Zuitt!'
                    })
                } else {
                    Swal.fire({
                        title: 'Authentication failed!',
                        icon: 'error',
                        text: 'Pasensya ka na sa kathang isip kong ito'
                    })
                }

            })
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
        (user.id !== null) ?
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

