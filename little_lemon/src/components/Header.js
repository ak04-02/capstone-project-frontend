import { Outlet, Link } from "react-router-dom";
function Header()
{
    return(
    <div class="navbar">
    <>
    <Link to="/">
    <div class="logo">
        <img src="https://restaurant-landing.pages.dev/h_logo.png" alt="logo" width="50%"/>
    </div></Link>
        <nav>
        <ul>
            <li>
                
            <Link to="/"><div class="Tab">Home</div></Link>
            </li>
            <li>
            <Link to="/booking"><div class="Tab">Reservation</div></Link>
            </li>
            <li>
            
            <Link to="/menu"><div class="Tab">Menu</div></Link></li>
            <li>
            <Link to="/about"><div class="Tab">About</div></Link>
            </li>
        </ul>
        </nav>
        <Outlet />
    </>
    </div>)
}
export default Header;