import "./navbar.less";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="cloud disk logo" className="navbar__logo" />
                <div className="navbar__header">Cloud Disk</div>
                <div className="navbar__login">Войти</div>
                <div className="navbar__registration">Регистрация</div>
            </div>
        </div>
    );
};
