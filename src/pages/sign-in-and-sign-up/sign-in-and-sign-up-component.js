import React from "react";
import { Container } from "reactstrap";

import "./sign-in-and-sign-up.css";
import SignIn from "../../component/sign-in/sign-in.component";

const SignInAndSignUpPage = () => (
    <>
        <Container>
            <div className="sign-in-and-sign-up">
                <SignIn />
            </div>
        </Container>
    </>
);

export default SignInAndSignUpPage;
