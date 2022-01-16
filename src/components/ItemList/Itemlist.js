import Item from "../Item/Item"
const ItemList =({products})=>{
    products.map(p=> console.log(p.title))
    return(<ul className="ListGroup">
        {products.map(p=><Item key={p.id} product={p}/>)}
    </ul>
    )
}

export default  ItemList