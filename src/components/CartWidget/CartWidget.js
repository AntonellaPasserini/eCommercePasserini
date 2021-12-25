import React from 'react';
import cart from '../../img/icons8-cart-64.png';
import { Link } from "react-router-dom";

const CartWidget = () =>{
    
    return(<Link to="/Cart"><img src={cart} className="App-cart" alt="cart" /></Link>)

}

export default CartWidget