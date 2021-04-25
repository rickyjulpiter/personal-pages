import React from "react";
import { Container, NavbarBrand, Nav, NavItem, Button } from "reactstrap";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import logo from "../../assets/logo.png";

const Header = ({ currentUser }) => (
    <Container className="nav-container">
        <div className="navbar" color="inverse" light expand="md">
            <NavbarBrand href="/" className="title_site">
                <img src={logo} alt="" style={{ width: 180 }} />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    {currentUser ? (
                        <div>
                            <Button
                                color="secondary btn-login"
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                            </Button>
                        </div>
                    ) : (
                        <Link className="nav-link" to="/signin">
                            <Button color="secondary btn-login">Sign In</Button>
                        </Link>
                    )}
                </NavItem>
            </Nav>
        </div>
    </Container>
);

export default Header;
