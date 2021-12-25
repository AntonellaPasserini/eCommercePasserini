
import { useContext } from 'react';
import { context } from '../CartContext/CartContext';

const Cart = () =>{
    const { cart, addItem,  removeItem, emptyCart}= useContext(context);
    return(

    <ul>
        cart.map((c) ={<li>c</li> })
    </ul>
        
    )
}

export default memo(Cart)