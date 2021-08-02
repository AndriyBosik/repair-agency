import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    document.title = "Login";

    return (
        <div className="window-height window-width yellow lighten-5 s-vflex-center">
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 push-m4">
                        <div className="px10 radius-4 z-depth-1">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}