import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Home from "./pages/home/home.component";
import Profile from "./pages/profile/profile.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "../src/component/header/header.component";
import Footer from "../src/component/footer/footer.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        const authGuard = (Component) => () => {
            return this.props.currentUser ? (
                <Component />
            ) : (
                <Redirect to="/signin" />
            );
        };
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/" render={authGuard(Home)} />
                    <Route path="/profile" component={Profile} />

                    <Route
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
