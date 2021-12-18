import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stockAmount, init, onAdd}) =>{
    const[contador,setContador]=useState(init)

    const addAmountItem = (e) =>{
        e.preventDefault();
        setContador(contador<stockAmount? contador+1 : contador);
    }
    
    const decreaseAmountItem = (e) =>{
        e.preventDefault();
        setContador(contador!==0 ? contador-1:0);
    }
    return (
        <>
        <div className="ItemCount">
            <button onClick={decreaseAmountItem}>-</button>
            <p>Amount: {contador}</p>
            <button onClick={addAmountItem}>+</button>
        </div>
        <div className="AddToCat">
        <Link to="/Cart" className="button">
            <button onClick={onAdd(contador)}>Add to Cart</button>
        </Link>
        </div>
        </>
    )
}

export default ItemCount;