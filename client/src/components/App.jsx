import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Registration } from "./authorization/Registration";
import "./app.less";
import { Login } from "./authorization/login";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <div className="wrap">
                    <Routes>
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
