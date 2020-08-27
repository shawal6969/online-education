import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='navBar'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Online Education</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#home">Courses</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;