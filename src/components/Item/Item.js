import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
        <Card className="m-5" style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                <Button variant="outline-dark">Comprar</Button>

                </Link>
            </Card.Body>
        </Card>
    )
}