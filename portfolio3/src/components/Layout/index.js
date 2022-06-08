import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: "#1e2a45" }}>
            <Navbar />
            <div className="page">
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default Layout;