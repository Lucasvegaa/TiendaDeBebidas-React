import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SpinnerLoading } from "../SpinnerLoading/SpinnerLoading";

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((el) => el.id === Number(itemId)))

            })
            .finally(() => {
                setLoading(false)
            })
    }
        , [itemId])

    return (
        <>
            <div className="container my-5">
                {
                    loading
                        ? <SpinnerLoading />
                        : <ItemDetail {...item} />
                }
            </div>
        </>
    )
};