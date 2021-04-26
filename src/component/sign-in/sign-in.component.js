import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import LoginImage from "../../assets/login.svg";

import "./sign-in.styles.scss";

import GoogleSignInLogo from "../../assets/btn-google2.svg";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <>
                <Card>
                    <CardImg
                        top
                        width="100%"
                        src={LoginImage}
                        alt="Card image cap"
                        className="pt-3 pr-3 pl-3"
                    />
                    <CardBody>
                        <div className="sign-in">
                            <form onSubmit={this.handleSubmit}>
                                <FormInput
                                    name="email"
                                    type="email"
                                    handleChange={this.handleChange}
                                    value={this.state.email}
                                    label="Email"
                                    required
                                />
                                <FormInput
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    label="Password"
                                    required
                                />
                                <div className="buttons">
                                    <CustomButton type="submit">
                                        {" "}
                                        Sign in{" "}
                                    </CustomButton>
                                    <p>
                                        or sign in with {"   "}
                                        <img
                                            className="btn-google"
                                            src={GoogleSignInLogo}
                                            alt="Google Logo"
                                            onClick={signInWithGoogle}
                                            // isGoogleSignIn
                                        />
                                    </p>
                                </div>
                            </form>
                        </div>
                    </CardBody>
                </Card>
            </>
        );
    }
}

export default SignIn;
