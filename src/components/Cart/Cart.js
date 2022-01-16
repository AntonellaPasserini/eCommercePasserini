
import { useContext, memo,useState } from 'react';
import { context } from '../CartContext/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import {db} from "../../firebase/index";

const Cart = () =>{
    const { cart, addItem,  removeItem, emptyCart}= useContext(context);

    const[loading,setLoading] = useState(false);

    const [id,setId]=useState("");

     const saveCart = async ()=>{
        setLoading(true);

        const date = new Date();
      
        const cartOrder ={

            buyer:{name:'John Doe',phoneNumber:123456,email:'jonhdoe1991@aol.com'},
            order:[{item:'mug',id:1,amount:12}],
            total:1200,
            date:`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        }
        const cartsCollection = collection(db,"carts");

        const response = await addDoc(cartsCollection,cartOrder);

        setLoading(true);

        setId(response.id);
     }
    return(<section>
                <ul>
                {cart.map((c) =><li>{c}</li>)}
                </ul>
                <button onClick={saveCart}>guardar compra</button>
                {id && <p>Your order has been saved and taken.<br/>Please save your order id:<span>{id}</span> to follow the status of your purchase</p>}
            </section>

    
    )
}

export default memo(Cart)