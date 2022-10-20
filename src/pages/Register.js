import { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function Register() {
    const { user, setUser } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    // for determining if button is disabled or not
    const [isActive, setIsActive] = useState(false)

    function registerUser(event) {
        event.preventDefault()

        fetch(`${process.env.REACT_APP_API_URL}/users/check-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result === true) {
                    Swal.fire({
                        title: 'Ooops',
                        icon: 'error',
                        text: 'Duplicate email was found!'
                    })
                } else {
                    fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password1,
                            firstName: firstName,
                            lastName: lastName,
                            mobileNo: mobileNumber
                        })
                    })
                        .then(response => response.json())
                        .then(result => {
                            if (result === false) {
                                return Swal.fire({
                                    title: 'Error',
                                    icon: 'error',
                                    text: 'Something went wrong!'
                                })
                            }
                            Swal.fire({
                                title: 'Success',
                                icon: 'success',
                                text: result.message
                            })
                            setEmail('')
                            setPassword1('')
                            setPassword2('')
                            setFirstName('')
                            setLastName('')
                            setMobileNumber('')
                        })
                }
            })





    }
    // console.log(email)
    // console.log(password1)
    // console.log(password2)
    useEffect(() => {
        if ((firstName !== '' && lastName !== '' && mobileNumber.length === 11 && email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [email, password1, password2, firstName, lastName, mobileNumber])

    return (
        (user.id !== null) ?
            <Navigate to="/courses" />
            :
            <Form onSubmit={event => registerUser(event)}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="mobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter mobile number"
                        value={mobileNumber}
                        onChange={event => setMobileNumber(event.target.value)}
                        required
                    />
                </Form.Group>
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

