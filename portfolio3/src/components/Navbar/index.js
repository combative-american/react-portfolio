import './index.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Col, Row, Button, Footer } from 'react-bootstrap'

const Navbar = () => (
    <navbar className='navbar navbar-dark bg-dark'>
        <Link className="navbar-brand navbar--title" to='/'>
            <h1>Steve Dyson</h1>
        </Link>
        <ul className="navbar--link navbar-nav">
            <li className="navbar-item"><Link to='/'>About Me</Link></li>
            <li className="navbar-item"><Link to='/contact'>Contact</Link></li>
        </ul>
    </navbar>
)

export default Navbar;