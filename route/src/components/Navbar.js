import {NavLink} from "react-router-dom";

const Navbar=()=>{
    return(
        <nav>
            <NavLink to="/" className={({isActive})=>isActive ? " navlink active" : "navlink"}>Home</NavLink> 
            <NavLink to="/about" className={({isActive})=>isActive ? " navlink active" : "navlink"}>About</NavLink> 
            <NavLink to="/contact" className={({isActive})=>isActive ? " navlink active" : "navlink"}>Contact</NavLink>
        </nav>
    );
}
export default Navbar;