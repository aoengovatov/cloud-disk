import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./navbar/Navbar";
import { Registration } from "./authorization/Registration";
import "./app.less";
import { Login } from "./authorization/login";

export const App = () => {
    const isAuth = useSelector((state) => state.user.isAuth);

    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <div className="wrap">
                    <Routes>
                        {!isAuth && (
                            <>
                                <Route path="/registration" element={<Registration />} />
                                <Route path="/login" element={<Login />} />
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
