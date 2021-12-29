import ItemList from '../ItemList/Itemlist';
import { useState,useEffect } from 'react';
import { getFirestore, serverTimestamp } from 'firebase/firestore';


const ItemListContainer = (props) =>{

    
    


    useEffect(()=>{

        const db = getFirestore();

        const itemCollection = db.collection("items");
        const item = itemCollection.doc(itemId);
        
        item.get().then((doc) => {
            if(!doc.exist){
                console.log("item does not exist");
            }
            setItem({id:doc.id,...doc.data()});
        }).catch((err) => {
            console(err);
        }).finally(() => {
            setLoading(false);
        })

    },[])

   
    return <div className="ItemListContainer">
        <h1>Welcome to The Kawaii Store</h1>
        <ItemList  products={item} />
    </div>
}
 
export default ItemListContainer