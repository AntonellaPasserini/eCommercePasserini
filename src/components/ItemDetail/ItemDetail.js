import ItemCount from "../ItemCount/ItemCount";

const ItemDetail=({item})=>{
    
    const addToCart =()=>{
        console.log("Items Added to the cart")
    }

    
    return(
       <div className="ItemDetailCard">
            <h2 className="ItemDetailHeader">{item.title}</h2>
            <img src={item.pictureUrl} alt={item.title} className="ItemDetailImg"></img>
            <p className="ItemDetailCategory">Category: {item.category}</p>
            <p className="ItemDetailPrice">Price: {item.price}</p>
            <p className="ItemDetailDescription"> Description:{item.description}</p>
            <ItemCount stockAmount={item.stockAmount} init={0} onAdd={addToCart}/>
        </div>
    );
}
export default Item