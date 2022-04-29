import './index.css'
import { Container, Navbar, Nav, NavDropdown, Col, Row, Button } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer">
			<div className="social d-flex justify-content-center">
				<a href="https://github.com/combative-american">
					<i className="fa-brands fa-github-square fa-2xl"></i>
				</a>
				<a href="https://www.facebook.com/Steve8932/">
					<i className="fa-brands fa-facebook-square fa-2xl"></i>
				</a>
			</div>
        </footer>
    )
}

export default Footer;