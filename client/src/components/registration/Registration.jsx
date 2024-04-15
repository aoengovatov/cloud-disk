import "./registration.less";
import { Input } from "../../ulils/input/Input";

export const Registration = () => {
    return (
        <div className="registration">
            <div className="registration__header"></div>
            <Input type="text" placeholder="" />
            <Input type="text" placeholder="" />
            <Input type="text" placeholder="" />
            <Input type="text" placeholder="" />
            <button className="registration__btn">Войти</button>
        </div>
    );
};
