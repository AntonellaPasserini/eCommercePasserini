import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
const Main = (props) =>{
    return(   <>   
           <ItemListContainer>
             {props.children}
            </ItemListContainer>
            <ItemDetailContainer/>
            </>
            )    
       
    
         
}

export default Main;