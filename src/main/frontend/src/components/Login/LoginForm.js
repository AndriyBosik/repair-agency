import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../shared/components/Input";

import M from "materialize-css";

export default function LoginForm() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = event => {
        event.preventDefault();
        console.log(login, password);
    }

    useEffect(() => {
        M.updateTextFields();
    }, []);

    return (
        <form onSubmit={tryLogin} className="auto-height">
            <Input
                id="login"
                placeholder="Login"
                iconName="account_circle"
                className="full-width col s12"
                handler={(value) => setLogin(value)} />

            <Input
                id="password"
                type="password"
                placeholder="Password"
                iconName="lock"
                className="full-width col s12"
                handler={(value) => setPassword(value)} />

            <div className="col s6 pr5">
                <button className="full-width btn waves-effect waves-light red" type="button">
                    Sign up <i className="material-icons right">supervisor_account</i>
                </button>
            </div>
            <div className="col s6 pl5">
                <button className="full-width btn waves-effect waves-light" type="submit" onClick={tryLogin}>
                    Login <i className="material-icons right">send</i>
                </button>
            </div>
            <div className="col s12 center-align my10">
                <Link to="/restore-password">
                    Forgot password?
                </Link>
            </div>
        </form>
    );
}