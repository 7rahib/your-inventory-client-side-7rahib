import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="light" collapseOnSelect expand="lg" sticky='top' variant="light">
                <Container>
                    <Navbar.Brand as={CustomLink} to="/">YourInventory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    < button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Log out</button>
                                    : <Nav.Link eventKey={2} as={CustomLink} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;