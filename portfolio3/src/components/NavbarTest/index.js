import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarTest = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ boxShadow: "0px 0px 8px 8px #000000" }}>
        <Container>
            <Navbar.Brand className="navbar--title display-1" style={{ fontFamily: 'Whisper', fontSize: 60 }}>Steven Dyson</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default NavbarTest;