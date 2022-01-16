import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';
import { Routes,Route } from 'react-router-dom';


const Main = () =>{
  
    
    return(   <Routes>   
           
            {/* <ItemDetailContainer/> */}
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:id" element={<ItemListContainer/>}/>
              <Route path={`/item/:id`} element={<ItemDetailContainer/>}/>
             <Route path={`/Cart`} element={<Cart/>}/>
            </Routes>
            )    
       
    
         
}

export default Main;