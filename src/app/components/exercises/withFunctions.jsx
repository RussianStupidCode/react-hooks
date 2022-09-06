import React, { useState, useEffect } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    // для ререндеринга
    const [state, setState] = useState(true);

    const changeState = () => {
        setState((prev) => !prev);
    };

    useEffect(() => {
        console.log("Перерисовка");
    }, [state]);

    const isAuth = !!window.localStorage.getItem("auth");

    const onLogin = () => {
        window.localStorage.setItem("auth", "token");
        changeState();
    };

    const onLogout = () => {
        window.localStorage.removeItem("auth");
        changeState();
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogout={onLogout}
                onLogin={onLogin}
            ></Component>
        </CardWrapper>
    );
};

export default withFunctions;
