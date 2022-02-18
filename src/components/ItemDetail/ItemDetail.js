import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext} from "../../context/CartContext"

export const ItemDetail = ({ id, nombre, precio, img, desc, categoria, stock }) => {
    
    const {cart, agregarAlCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0);
    console.log(cart)
    const handleAgregar = () => {
        if(cantidad === 0) return
        const addItem = { id, nombre, precio, stock, cantidad }
        agregarAlCarrito(addItem)
    }

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}></img>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
            <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />

            <button
                className="btn btn-success my-2"
                onClick={handleAgregar}
            >
                Agregar Carrito</button>
        </div>

    )
}