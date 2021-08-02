import React from "react";
import Input from "../../shared/components/Input";

export default function ProfilePage() {
    return (
        <div className="container py15">
            <div className="row">
                <div className="col full-width s-hflex">
                    <div className="equal-flex s-hflex-start m-hflex-end">
                        <div className="z-depth-1 user-avatar default radius-circle"></div>
                    </div>
                    <div className="col equal-flex s-hflex-start">
                        <div className="full-width s-vflex-center">
                            <div className="col file-field no-file-path input-field">
                                <div className="btn">
                                    <span>Upload<i className="material-icons right">file_upload</i></span>
                                    <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input type="text" className="file-path validate" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Input type="text" className="col s12 m6" id="name" placeholder="Name" />
                <Input type="text" className="col s12 m6" id="surname" placeholder="Surname" />
                <Input type="text" className="col s12 m6" id="login" placeholder="Login" />
                <Input type="text" className="col s12 m6" id="email" placeholder="E-mail" />
                <Input type="password" className="col s12 m6" id="password" placeholder="Password" />
                <Input type="password" className="col s12 m6" id="confirm-password" placeholder="Confirm password" />

                <div className="col s12">
                    <div className="right">
                        <button className="btn waves-effect waves-light" type="button">
                            <i className="material-icons left">check</i> CONFIRM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}