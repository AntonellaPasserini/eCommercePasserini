import React from 'react';
import cart from '../../img/icons8-cart-64.png';
import { context } from '../CartContext/CartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

const CartWidget = () =>{

    const products = useContext(context);
    
    return(<Link to="/Cart"><img src={cart} className="App-cart" alt="cart" /></Link>)

}

export default CartWidget