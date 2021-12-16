import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Routes,Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Main = () =>{
  const {id} = useParams()
    
    return(   <Routes>   
           
            {/* <ItemDetailContainer/> */}
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path={`/item/:id`} element={<ItemDetailContainer/>}/>
            </Routes>
            )    
       
    
         
}

export default Main;