import "./authorization.less";
import { Input } from "../../ulils/input/Input";
import { useState } from "react";
import { registration } from "../../actions/user";

export const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="authorization">
            <div className="authorization__header">Регистрация</div>
            <Input
                value={email}
                setValue={setEmail}
                type="text"
                placeholder="Введите email..."
            />
            <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Введите пароль..."
            />
            <button
                className="authorization__btn"
                onClick={() => registration(email, password)}
            >
                Зарегистрироваться
            </button>
        </div>
    );
};
