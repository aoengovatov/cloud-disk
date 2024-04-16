import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Registration } from "./registration/Registration";
import "./app.less";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <div className="wrap">
                    <Routes>
                        <Route path="/registration" element={<Registration />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
