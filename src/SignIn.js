import React, { Component } from "react";
import axios from "axios";
import "./SignIn.css";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.logIn = this.logIn.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }
    render() {
        return (
            <div className="SignIn-main">
                <h2 className="signin-header2">Please Sign In</h2>
                <input
                    className="input"
                    onChange={this.setUserName}
                    placeholder="username"
                />
                <input
                    className="input"
                    onChange={this.setPassword}
                    placeholder="password"
                />
                <div className="button" onClick={this.logIn}>
                    Log In
                </div>
                <h2 className="signin-header2"> Or Create Account </h2>
                <input
                    className="input"
                    onChange={this.setUserName}
                    placeholder="username"
                />
                <input
                    className="input"
                    onChange={this.setPassword}
                    placeholder="password"
                />
                <div className="button" onClick={this.createAccount}>
                    Create Account
                </div>
            </div>
        );
    }
    setUserName(event) {
        this.setState({ username: event.target.value });
    }
    setPassword(event) {
        this.setState({ password: event.target.value });
    }
    logIn() {
        axios
            .get("/users", {
                params: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(
                function(response) {
                    this.props.logInFunction(
                        response.data.views,
                        response.data.user_id
                    );
                }.bind(this)
            );
    }
    createAccount() {
        axios
            .post("/users", {
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(
                function(response) {
                    this.props.logInFunction(
                        response.data.views,
                        response.data.user_id
                    );
                }.bind(this)
            );
    }
}
export default SignIn;
