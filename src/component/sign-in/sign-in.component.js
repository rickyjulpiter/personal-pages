import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "reactstrap";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";
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

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: "", password: "" });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="mx-auto">
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
                                                    or sign with {"   "}
                                                    <img
                                                        src={GoogleSignInLogo}
                                                        alt=""
                                                        onClick={
                                                            signInWithGoogle
                                                        }
                                                        isGoogleSignIn
                                                        className="btn-google"
                                                    />
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default SignIn;
