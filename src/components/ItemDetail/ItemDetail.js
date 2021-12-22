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
                     <h2 className="ItemDetailHeader">{item[0].title}</h2>
                     <img src={item[0].pictureUrl} alt={item[0].title} className="ItemDetailImg"></img>
                 </div>
                 
                 <div className="ItemDetailInfo"> 
                     <p className="ItemDetailLocation">{item[0].location}</p>
                     <p className="ItemDetailCategory">Category: {item[0].category}</p>
                     <p className="ItemDetailPrice">Price: {item[0].price}</p>
                     <p className="ItemDetailDescription"> Description: {item[0].description}</p>
                 </div>
                
             </article>
         );

    }else{
        return(
            <article className="ItemDetailCard">
                 <div>
                     <h2 className="ItemDetailHeader">{item[0].title}</h2>
                     <img src={item[0].pictureUrl} alt={item[0].title} className="ItemDetailImg"></img>
                 </div>
                 
                 <div className="ItemDetailInfo"> 
                     <p className="ItemDetailLocation">{item[0].location}</p>
                     <p className="ItemDetailCategory">Category: {item[0].category}</p>
                     <p className="ItemDetailPrice">Price: {item[0].price}</p>
                     <p className="ItemDetailDescription"> Description: {item[0].description}</p>
                     <ItemCount stockAmount={item[0].stockAmount} init={0} onAdd={AddToCart}/>
                 </div>
                
             </article>
         );
    }
    
}
export default ItemDetail