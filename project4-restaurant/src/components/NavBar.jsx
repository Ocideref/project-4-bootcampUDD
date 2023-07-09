import { Link, NavLink } from "react-router-dom"
import restaurantLogo from '../assets/img/smash-burger.png';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm p-0">
             <div className="container">
                <a className="navbar-brand bg-light ms-4" href="#">
                    <img src={restaurantLogo} alt="Logo" width="150" className="d-inline-block align-text-top p-2"></img>
                </a>
                <div className="navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/usuarios">Usuarios</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}