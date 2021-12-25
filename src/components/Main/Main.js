import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Routes,Route } from 'react-router-dom';


const Main = () =>{
  
    
    return(   <Routes>   
           
            {/* <ItemDetailContainer/> */}
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path={`/item/:id`} element={<ItemDetailContainer/>}/>
            </Routes>
            )    
       
    
         
}

export default Main;