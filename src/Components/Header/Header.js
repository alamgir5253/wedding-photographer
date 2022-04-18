import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut=() =>{
    signOut(auth)
  }
    return (
        <Navbar className='header-nav' collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">wedding photographer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/about">about</Nav.Link>
      <Nav.Link as={Link} to="/blog">blog</Nav.Link>
    </Nav>
    <Nav>
      {user? <Nav.Link onClick={handleSignOut} style={{color:"#fff"}}>sign out</Nav.Link>:<Nav.Link as={Link} to="/login">login</Nav.Link>}
      <Nav.Link as={Link} to="/signup">signup</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;