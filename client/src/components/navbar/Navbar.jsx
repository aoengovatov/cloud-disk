import "./navbar.less";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/logo.png";
import { logout } from "../../reducers/userReducer";

export const Navbar = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="cloud disk logo" className="navbar__logo" />
                <div className="navbar__header">Cloud Disk</div>
                {!isAuth && (
                    <div className="navbar__login">
                        <NavLink to="/login">Войти</NavLink>
                    </div>
                )}
                {!isAuth && (
                    <div className="navbar__registration">
                        <NavLink to="/registration">Регистрация</NavLink>
                    </div>
                )}
                {isAuth && (
                    <div className="navbar__login" onClick={() => dispatch(logout())}>
                        Выход
                    </div>
                )}
            </div>
        </div>
    );
};
