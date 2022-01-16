import ItemList from '../ItemList/Itemlist';
import { useState,useEffect } from 'react';
import { collection, getDocs, where,query } from 'firebase/firestore';
import {db} from "../../firebase/index";
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) =>{
    const  { id }  = useParams()

    const [item, setItem]=useState([])



    useEffect(()=>{

        const itemCollection = collection(db,"items");

        if(id){
            const categoryQuery =query(itemCollection, where('category','==',id))
            const itemPromise = getDocs(categoryQuery);
            
            itemPromise.then((res)=>{
                const itemsFormated =[];

                res.forEach(doc => {  
                    if(!doc.exist){
                        console.log("item does not exist");
                    }
                    
                    const docData =doc.data()
                    docData.id =doc.id
                    itemsFormated.push(docData);
                    console.log(itemsFormated)
                    setItem(itemsFormated)
                });
            }).catch((err)=>{
                console.log(err)
            });
        }else{
            const itemPromise = getDocs(itemCollection);

            itemPromise.then((res)=>{
                const itemsFormated =[];

                res.forEach(doc => {  
                    if(!doc.exist){
                        console.log("item does not exist");
                    }
                    
                    const docData =doc.data()
                    docData.id =doc.id
                    itemsFormated.push(docData);
                    setItem(itemsFormated)
                });
            }).catch((err)=>{
                console.log(err)
            });       
        }
        
    },[id])

   
    return <div className="ItemListContainer">
        <h1>Welcome to The Kawaii Store</h1>
        <ItemList  products={item} />
    </div>
}
 
export default ItemListContainer