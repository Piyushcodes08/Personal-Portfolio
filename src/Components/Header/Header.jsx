import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import '../Header/Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
     const [expanded, setExpanded] = useState(false);
    return (
        <div>
             <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto font-[font1]">
                           <NavLink className="navlink" to="/" onClick={() => setExpanded(false)}>Home</NavLink>
                        <NavLink className="navlink" to="/about" onClick={() => setExpanded(false)}>About</NavLink>
                        <NavLink className="navlink" to="/project" onClick={() => setExpanded(false)}>Projects</NavLink>
                        <NavLink className="navlink" to="/contact" onClick={() => setExpanded(false)}>    <button>Hire me</button>
                        </NavLink>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
