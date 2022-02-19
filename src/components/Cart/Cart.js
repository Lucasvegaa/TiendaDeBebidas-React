import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Table } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs";

export const Cart = () => {
    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)
    return (
        <div>
            <h2>Tu compra</h2>
            <hr />
            {
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (

                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad}</td>
                                <td>${item.precio}</td>
                                <td> <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}><BsFillTrashFill /></button> </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
            <hr />
            <h3>Total: ${totalCart()}</h3>
            <button className="btn btn-danger mx-5" onClick={() => vaciarCart()}>Vaciar Carrrito</button>
        </div>
    )
}