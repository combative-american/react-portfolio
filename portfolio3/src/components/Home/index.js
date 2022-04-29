import './index.css'
import photo from './photo.jpg'
import Skillsbar from '../Skillsbar'
import { Container, Navbar, Nav, NavDropdown, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <main className="pt-4">
            <Row className="home align-items-center m-3 p-3 border border-white border-5 rounded">
                <Col lg="9" md="6" className="home--text mb-3 p-4">
                    <h2 className="display-1 mb-4">Hey,<br /> I'm Steve<br /> This is my portfolio</h2>
                    <p className="mb-4">Front-end Web Developer, Entrepreneur, Dedicated Professional</p>
                    <a href="mailto:steven.dyson@pm.me"><Button>Contact Me</Button></a>
                </Col>
                <Col lg="3" md="6" className="home--photo">
                    <img className="img-fluid" src={photo} alt="Man at the Grand Canyon" />
                </Col>
            </Row>
            <Skillsbar />
        </main>
    )
}

export default Home;