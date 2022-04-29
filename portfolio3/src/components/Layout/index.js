import './index.css'
import NavbarTest from '../NavbarTest'
import Home from '../Home'
import Footer from '../Footer'
import { Container, Navbar, Nav, NavDropdown, Col, Row } from 'react-bootstrap'

const Layout = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: "#1e2a45" }}>
            <NavbarTest />
            <Home />
            <Footer />
        </Container>
    )
}

export default Layout;