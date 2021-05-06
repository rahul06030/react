import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import {Navbar,Button ,Nav,NavDropdown ,Form,FormControl } from 'react-bootstrap';

export const Menu = () => {
	return(
		<Navbar bg="light" expand="lg">
		<Navbar.Brand href="#home">Organic</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
			<Nav.Link href="/">Home</Nav.Link>
			<Nav.Link href="/dashboard">Dashboard</Nav.Link>

			<Nav.Link href="/login">Signup</Nav.Link>
			<NavDropdown title="User" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
			</NavDropdown>
			</Nav>
	
		</Navbar.Collapse>
		</Navbar>

)
}


