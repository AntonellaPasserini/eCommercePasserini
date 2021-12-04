import { useState } from 'react';

const ItemCount = () =>{
    let init = 0;
    const[contador,setContador]=useState(init)
    const addAmountItem = () =>{
        setContador(contador+1)
    }
    
    const decreaseAmountItem = () =>{
        setContador(contador!=0 ? contador-1:0)
    }
    return (
        <div className="ItemCount">
            <button onClick={decreaseAmountItem}>-</button>
            <p>Amount: {contador}</p>
            <button onClick={addAmountItem}>+</button>
        </div>
    )
}

export default ItemCount;