import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";

const Item=({product})=>{
    
    const addToCart =()=>{
        console.log("Items Added to the cart")
    }

    
    return(
       <div className="ItemCard">
            <h2 className="ItemHeader">{product.title}</h2>
            <img src={product.pictureUrl} alt={product.title} className="ItemImg"></img>
            <p className="ItemCategory">Category: {product.category}</p>
            <p className="ItemPrice">Price: {product.price}</p>
            <NavLink to={`/item/${product.id}`} pat className="MoreInfoBtn"> See More Details</NavLink>
            <ItemCount stockAmount={product.stockAmount} init={0} onAdd={addToCart}/>
        </div>
    );
}
export default Item