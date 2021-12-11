import ItemDetail from '../ItemDetail/ItemDetail';
import { useState,useEffect } from 'react'



const ItemDetailContainer = (props,id) =>{

    const [item,setItem] =useState([
      props.map(prod=>prod[props.indexof(id)])
    ])

    useEffect(()=>{

        const getItem = new Promise((res,rej)=>{           
             setTimeout(()=>{
                res(item)
             },2000)
        })
        getItem.then(()=>{

        })

    },[])

   
    return <div className="ItemDetailContainer">
        <ItemDetail  item={item} />
    </div>
}
 
export default ItemDetailContainer