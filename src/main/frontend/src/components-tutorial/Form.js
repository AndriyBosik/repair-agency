import React, { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            comments: "",
            topic: "react"
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(`${this.state.username} ${this.state.email} ${this.state.comments} ${this.state.topic}`);
    }

    handleUsernameChanged = event => {
        this.setState({
            username: event.target.value
        });
    }

    handleEmailChanged = event => {
        this.setState({
            email: event.target.value
        });
    }

    handleCommentsChanged = event => {
        this.setState({
            comments: event.target.value
        });
    }

    handleTopicChanged = event => {
        this.setState({
            topic: event.target.value
        });
    }

    render() {
        const {username, email, comments, topic} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        id="username"
                        type="text"
                        value={username} onChange={this.handleUsernameChanged} />
                </div>

                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input
                        id="email"
                        type="email"
                        value={email} onChange={this.handleEmailChanged} />
                </div>
                
                <div>
                    <label htmlFor="comments">Comments</label>
                    <textarea
                        id="comments"
                        value={comments} onChange={this.handleCommentsChanged} />
                </div>

                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChanged}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        );
    }

}

export default Form