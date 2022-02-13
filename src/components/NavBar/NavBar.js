
import { CartWidget } from '../cartWidget/cartWidget.';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <header className="header">
            <Link to="/" className='linkNV'><h1>BROOKLYN</h1> </Link>
            <Nav  as="ul" className='header-nav'>
                <Nav.Item as="li">
                    <Link to="/productos/vino" className='header-link linkNV' >Vinos</Link>
                </Nav.Item>
                <Nav.Item as="li" >
                    <Link to="/productos/cerveza" className='header-link linkNV' >Cerveza</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/productos/whisky" className='header-link linkNV'>Whisky</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/" className='header-link linkNV'><CartWidget /></Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}