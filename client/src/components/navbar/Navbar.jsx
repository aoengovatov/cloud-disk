import "./navbar.less";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="cloud disk logo" className="navbar__logo" />
                <div className="navbar__header">Cloud Disk</div>
                <div className="navbar__login">
                    <NavLink to="/login">Войти</NavLink>
                </div>
                <div className="navbar__registration">
                    <NavLink to="/registration">Регистрация</NavLink>
                </div>
            </div>
        </div>
    );
};
