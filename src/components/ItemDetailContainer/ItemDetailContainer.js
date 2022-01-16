import ItemDetail from '../ItemDetail/ItemDetail';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDoc,doc } from 'firebase/firestore';
import {db} from "../../firebase/index";

const ItemDetailContainer = () =>{
        const  { id }  = useParams()
    
/*     const [products,setProducts] =useState([
        {Id:1, title:'Kitten Mug',price:'$20',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',category:'pottery',stockAmount: 8, pictureUrl:'https://m.media-amazon.com/images/I/51wu7w0OPDL._AC_SL1000_.jpg',location:'USA'},
        {Id:2, title:'Cat Silicone LED Night Lamp',price:'$35',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',category:'Lighting',stockAmount:15, pictureUrl:'https://m.media-amazon.com/images/I/61G26-S3MTL._AC_SL1500_.jpg',location:'Canada'},
        {Id:3, title:'Desk Organizer',price:'$40',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',category:'Home & Decor',stockAmount:6, pictureUrl:'https://m.media-amazon.com/images/I/71WjZS4u+YL._AC_SL1150_.jpg',location:'USA'}
    ])
     */
    const [item, setItem]=useState([])

    useEffect(()=>{
        const itemCollection = collection(db,"items");
        
        const docReference = doc(itemCollection,id)
        const itemPromise = getDoc(docReference);
        itemPromise.then((res)=>{

        setItem({...res.data()})
            
        }).catch((err)=>{
            console.log(err)
        })


    },[id])
    return <div className="ItemDetailContainer">
        <ItemDetail  item={item} />
    </div>
}
 
export default ItemDetailContainer