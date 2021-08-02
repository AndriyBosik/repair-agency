import React, { Component } from "react";

class UserGreeting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.login = this.login.bind(this);
    }

    login() {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        let message = this.state.isLoggedIn ? "Welcome, Andrew" : "Welcome, Guest";
        return (
            <div>
                <div>{message}</div>
                <button type="button" onClick={this.login}>Login</button>
            </div>
        );
    }

}

export default UserGreeting;