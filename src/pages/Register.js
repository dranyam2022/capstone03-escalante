import { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom'
import UserContext from '../UserContext'

export default function Register() {
    const { user, setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    // for determining if button is disabled or not
    const [isActive, setIsActive] = useState(false)

    function registerUser(event) {
        event.preventDefault()

        // clear out all the input fields after form submission
        setEmail('')
        setPassword1('')
        setPassword2('')

        alert('you have successfuly registered!')
    }
    // console.log(email)
    // console.log(password1)
    // console.log(password2)
    useEffect(() => {
        if ((email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [email, password1, password2])

    return (
        (user.email !== null) ?
            <Navigate to="/courses" />
            :
            <Form onSubmit={event => registerUser(event)}>
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

                <Form.Group controlId="password1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password1}
                        onChange={event => setPassword1(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="password2">
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Verify Password"
                        value={password2}
                        onChange={event => setPassword2(event.target.value)}
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

