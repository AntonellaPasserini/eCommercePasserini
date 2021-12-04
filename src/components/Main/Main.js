import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Main = (props) =>{
    return(      
           <ItemListContainer>
             {props.children}
            </ItemListContainer>)    
       
    
         
}

export default Main;