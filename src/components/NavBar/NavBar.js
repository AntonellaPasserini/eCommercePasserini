import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar =()=>{
    return<nav>
        <Link to="Deals"> Deals </Link>
        <Link to="Accesories"> Accesories </Link>
        <Link to="/"> Home </Link>
        <Link to="Clothes"> Clothes </Link>
        <Link to="Books&Mangas"> Books & Mangas </Link>
        <CartWidget/>
    </nav>

}

export default NavBar;
//Componentes: Son Funciones, Tienen que retornar algo( string, elementos). La primera letra debe estar en mayuscula