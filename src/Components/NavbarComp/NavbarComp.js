import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Zoom in Gezer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/broadcast">Broadcast</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp
