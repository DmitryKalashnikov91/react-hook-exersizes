import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isLogin = localStorage.getItem("user");
    const [state, setState] = useState(false);
    const onLogin = () => {
        localStorage.setItem("user", 1);
        setState(!state);
        console.log(isLogin);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setState(!state);
        console.log(isLogin);
    };
    return (
        <>
            <CardWrapper>
                {!isLogin ? (
                    <button className="btn btn-primary" onClick={onLogin}>
                        Войти
                    </button>
                ) : (
                    <button
                        className="btn btn-outline-success"
                        onClick={onLogOut}
                    >
                        Выйти из системы
                    </button>
                )}
            </CardWrapper>
        </>
    );
};

export default withFunctions;
