import Item from "../Item/Item"

const ItemList =({products})=>{
    return(<ul className="ListGroup">
        {products.map(p=><Item key={p.id} product={p}/>)}
    </ul>
    )
}

export default  ItemList