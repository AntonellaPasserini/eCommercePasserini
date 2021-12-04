import { useState } from 'react';

const ItemCount = ({stockAmount, init, onAdd}) =>{
    const[contador,setContador]=useState(init)

    const addAmountItem = () =>{
        setContador(contador<stockAmount? contador+1 : contador)
    }
    
    const decreaseAmountItem = () =>{
        setContador(contador!=0 ? contador-1:0)
    }
    return (
        <>
        <div className="ItemCount">
            <button onClick={decreaseAmountItem}>-</button>
            <p>Amount: {contador}</p>
            <button onClick={addAmountItem}>+</button>
        </div>
        <div className="AddToCat">
            <button onClick={onAdd}>Add to Cart</button>
        </div>
        </>
    )
}

export default ItemCount;