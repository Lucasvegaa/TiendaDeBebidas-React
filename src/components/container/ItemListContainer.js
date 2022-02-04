import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { stock } from "../../data/stock"
import {Spinner} from 'react-bootstrap';


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const pedirDatos = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading
                    ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                    : <ItemList productos={productos} />
            }
        </>
    )
};
