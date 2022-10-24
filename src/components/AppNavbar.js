import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import UserContext from '../UserContext'

export default function AppNavbar() {

	const { user } = useContext(UserContext)

	// const [user, setUser] = useState(localStorage.getItem('email'))

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand as={Link} className="mx-3">Express Arms Dealer</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={NavLink} to="/">Home</Nav.Link>
					<Nav.Link as={NavLink} to="/courses">Products</Nav.Link>
					{
						(user.id)
							?
							<>
								<Nav.Link as={NavLink} to="/cart">View Cart</Nav.Link>
								<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
							</>
							:
							<>
								<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
								<Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>
							</>
					}

				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}