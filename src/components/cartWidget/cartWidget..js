import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {cantidadCart} = useContext(CartContext)

    return (
        <>
        <ShoppingCartIcon/>
        <span>{cantidadCart()}</span>
        </>
    )
}