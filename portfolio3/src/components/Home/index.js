import './index.css'
import photo from './photo.jpg'
import Skillsbar from '../Skillsbar'
import { Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <main>
            <section className="main2">
                <Row className="home align-items-center m-5 p-5 border border-white border-5 rounded">
                    <Col lg="7" md="6" sm="12" className="home--text mb-3">
                        <h2 className="display-1 mb-4">Hey,<br /> I'm Steve.<br /> This is my portfolio.</h2>
                        <p className="mb-4">Front-end Web Developer, Entrepreneur, Dedicated Professional</p>
                        <a href="mailto:steven.dyson@proton.me"><Button>Contact Me</Button></a>
                    </Col>
                    <Col lg="5" md="6" sm="12" className="home--photo mt-3 mb-3">
                        <img className="img-fluid" src={photo} alt="Man at the Grand Canyon" />
                    </Col>
                </Row>
            </section>
            <Skillsbar />
        </main>
    )
}

export default Home;