import ItemCount from '../ItemCount/ItemCount'



const ItemListContainer = (props) =>{

    const addToCart =()=>{
        console.log("Items Added to the cart")
    }

    return <div className="ItemListContainer">
        <h1>Welcome to The Kawaii Store</h1>
        <ItemCount stockAmount={8} init={0} onAdd={addToCart}/>
    </div>
}

export default ItemListContainer