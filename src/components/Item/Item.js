import { Button, Card } from "react-bootstrap"


export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
        <Card className="m-5" style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Descripcion: {desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Button variant="outline-dark">Comprar</Button>
            </Card.Body>
        </Card>
    )
}