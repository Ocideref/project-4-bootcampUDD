import { Link, NavLink } from "react-router-dom"
import restaurantLogo from '../assets/restaurant-app-logo.png';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
             <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={restaurantLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-2"></img>
                Mr.Chef
                </a>
            </div>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/usuarios">Usuarios</NavLink>
                </div>
            </div>
        </nav>
    )
}