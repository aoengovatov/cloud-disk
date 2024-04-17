import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./navbar/Navbar";
import { Registration } from "./authorization/Registration";
import { auth } from "../actions/user";
import { Login } from "./authorization/login";
import { useEffect } from "react";
import "./app.less";

export const App = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);

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
