import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./sign-in-and-sign-up.scss";
import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
    <Container>
        <div className="sign-in-and-sign-up">
            <Row>
                <Col lg="6" md="6" className="mx-auto">
                    <SignIn />
                </Col>
                <Col lg="6" md="6" className="mx-auto">
                    <SignUp />
                </Col>
            </Row>
        </div>
    </Container>
);

export default SignInAndSignUpPage;
