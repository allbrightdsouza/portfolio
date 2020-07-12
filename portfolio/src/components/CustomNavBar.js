import React from 'react';
// import {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const CustomNavBar = () => {
    return(
        <div id="main-nav-bar">
            <Navbar bg="primary" variant="dark" expand="lg">
            <Nav>
                        <Nav.Link as={Link}  to={'/'} exact={true}>Allbright Dsouza</Nav.Link>   
                    </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} to={`/home`}>Home</Nav.Link>
                        {/* <Nav.Link as={NavLink} to={`/projects`}>Projects</Nav.Link> */}
                        <Nav.Link as={NavLink} to={`/contact`}>Contact</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;