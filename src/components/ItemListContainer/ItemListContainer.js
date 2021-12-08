import ItemList from '../ItemList/Itemlist';
import { useState,useEffect } from 'react'



const ItemListContainer = (props) =>{

    const [products,setProducts] =useState([
        {id:1, title:'Kitten Mug',price:'$20',category:'pottery',stockAmount: 8, pictureUrl:'https://m.media-amazon.com/images/I/51wu7w0OPDL._AC_SL1000_.jpg'},
        {id:2, title:'Cat Silicone LED Night Lamp',price:'$35',category:'Lighting',stockAmount:15, pictureUrl:'https://m.media-amazon.com/images/I/61G26-S3MTL._AC_SL1500_.jpg'},
        {id:3, title:'Desk Organizer',price:'$40',category:'Home & Decor',stockAmount:6, pictureUrl:'https://m.media-amazon.com/images/I/71WjZS4u+YL._AC_SL1150_.jpg'}
    ])

    useEffect(()=>{

        const productListPropmise = new Promise((res,rej)=>{           
             setTimeout(()=>{
                res(products)
             },2000)
        })
        productListPropmise.then(()=>{

        })

    },[])

   
    return <div className="ItemListContainer">
        <h1>Welcome to The Kawaii Store</h1>
        <ItemList  products={products} />
    </div>
}
 
export default ItemListContainer