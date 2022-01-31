import "./NavBar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Nav} from 'react-bootstrap';
export const NavBar = () => {
    return (
        <header className="header">
            <h1>BROOKLYN</h1>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home" >Vinos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Cerveza</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Whisky</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2"><ShoppingCartIcon/></Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}