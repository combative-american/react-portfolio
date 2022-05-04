import './index.css'
import Navbar from '../Navbar'
import Home from '../Home'
import Footer from '../Footer'
import { Container } from 'react-bootstrap'

const Layout = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: "#1e2a45" }}>
            <Navbar />
            <Home />
            <Footer />
        </Container>
    )
}

export default Layout;