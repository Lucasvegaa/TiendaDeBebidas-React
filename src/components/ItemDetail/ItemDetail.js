export const ItemDetail = ({id, nombre, precio, img, desc,categoria, stock}) => {
    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img}></img>
            <p>{desc}</p>
            <h5>Precio:{precio}</h5>
        </div>


    )
}