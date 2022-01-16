import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import {useNavigate } from 'react-router-dom';
const ItemDetail=({item})=>{

    const [itemsAdded, setItemsAdded]= useState(false)

    const history = useNavigate ();

    const AddToCart= quantityToAdd =>(e)=>{
        e.preventDefault();
        console.log("Items Added to the cart",quantityToAdd)
      if(quantityToAdd>0)
            {
            history('/cart')
            setItemsAdded(true)
            //addItem(item,quantityToAdd)
            }
        }
       
        


    if(itemsAdded){
        return(
            <article className="ItemDetailCard">
                 <div>
                     <h2 className="ItemDetailHeader">{item.title}</h2>
                     <img src={item[0].pictureUrl} alt={item.title} className="ItemDetailImg"></img>
                 </div>
                 
                 <div className="ItemDetailInfo"> 
                     <p className="ItemDetailLocation">{item.location}</p>
                     <p className="ItemDetailCategory">Category: {item.category}</p>
                     <p className="ItemDetailPrice">Price: {item.price}</p>
                     <p className="ItemDetailDescription"> Description: {item.description}</p>
                 </div>
                
             </article>
         );

    }else{
        return(
            <article className="ItemDetailCard">
                 <div>
                     <h2 className="ItemDetailHeader">{item.title}</h2>
                     <img src={item.pictureUrl} alt={item.title} className="ItemDetailImg"></img>
                 </div>
                 
                 <div className="ItemDetailInfo"> 
                     <p className="ItemDetailLocation">{item.location}</p>
                     <p className="ItemDetailCategory">Category: {item.category}</p>
                     <p className="ItemDetailPrice">Price: {item.price}</p>
                     <p className="ItemDetailDescription"> Description: {item.description}</p>
                     <ItemCount stockAmount={item.stockAmount} init={0} onAdd={AddToCart}/>
                 </div>
                
             </article>
         );
    }
    
}
export default ItemDetail