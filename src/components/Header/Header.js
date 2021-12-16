import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";
const Header =()=>{
    return<header>
        <NavLink to="/">
        <h1>THE KAWAII STORE</h1>
        <h4>かわいい　の　ストル</h4>
        </NavLink>
        <NavBar/>
    </header>

}

export default Header;