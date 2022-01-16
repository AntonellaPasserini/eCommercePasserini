import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar =()=>{
    return<nav>
        <Link to="/category/pottery"> Pottery </Link>
        <Link to="/"> Home </Link>
        <Link to="/category/Lighting"> Lighting </Link>
        <Link to="/category/Home&Decor"> Home & Decor </Link>
        <CartWidget/>
    </nav>

}

export default NavBar;
//Componentes: Son Funciones, Tienen que retornar algo( string, elementos). La primera letra debe estar en mayuscula