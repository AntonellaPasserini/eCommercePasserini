import CartWidget from "./CartWidget";
const NavBar =()=>{
    return<nav>
        <a href="#"> Home </a>
        <a href="#"> Deals </a>
        <a href="#"> Accesories </a>
        <a href="#"> Clothes </a>
        <a href="#"> Books & Mangas </a>
        <CartWidget/>
    </nav>

}

export default NavBar;
//Componentes: Son Funciones, Tienen que retornar algo( string, elementos). La primera letra debe estar en mayuscula