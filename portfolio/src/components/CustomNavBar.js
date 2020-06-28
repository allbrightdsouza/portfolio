import React from 'react';
// import {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const CustomNavBar = () => {
    return(
        <div id="main-nav-bar">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={`/home`}>Home</Nav.Link>
                        <Nav.Link as={Link} to={`/projects`}>Projects</Nav.Link>
                        <Nav.Link as={Link} to={`/contact`}>Contact</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;