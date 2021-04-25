import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-component";
import Header from "./component/navbar/navbar.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </>
        );
    }
}

export default App;
