import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './NavbarComp.css'

function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">זום בגזר</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/broadcast">לוח שידורים</Nav.Link>
                    <Nav.Link href="/about">אודות</Nav.Link>
                    <Nav.Link href="/instructor-signup">הרשמת מדריכים</Nav.Link>
                    <Nav.Link href="/contactus">צור קשר</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp
