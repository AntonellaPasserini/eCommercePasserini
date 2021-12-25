import { createContext, useState } from 'react';

export const context = createContext({});

const CartContext = ({children}) => {
    const {Provider} = context;

    const[cart,setCart] = useState([]);

    const addItem = (item, amountAdded) => {
    if(cart.length===0){
        if(!isInCart(item.Id)){
            setCart([{id:item.Id,price:item.price,title:item.title,quantity:amountAdded}])
        }

    }else{
        if(!isInCart(item.Id)) {
            setCart([...cart,{id:item.Id,price:item.price,title:item.title,quantity:amountAdded}])
        }
    }
    };

    const removeItem = (productId) => {
            let res = cart.indexOf(cart.filter(item=>item.id===productId))
            setCart(cart.splice(res,1));

    };

    const emptyCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        if(cart){
        let res = cart.find(i=>i.Id===id);
        return res!=='undefiend'? true : false
        }
        return false
    };

    const contextCart = {
        cart,
        addItem,
        removeItem,
        emptyCart
    }
        return(
            <Provider value = {contextCart}>
                {children}
            </Provider>
        )
    };


export default CartContext;