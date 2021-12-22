import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import{BrowserRouter} from 'react-router-dom';
import CartContext from'../CartContext/CartContext';



const App = () =>{
    return ( <BrowserRouter>
                <CartContext>
                    <Header/>
                    <Main/>
                    <Footer/>
                </CartContext>
            </BrowserRouter>
        )
}

export default App