import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Pokemon from "../../component/pokemon/pokemon.component";

import image from "../../assets/home_page.svg";

export default class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg="5" md="5" className="banner-new-homepage">
                            <h1 className="mb-3 font-weight-500">
                                Hi! I'm Ricky J.
                            </h1>
                            <h5>and here short description about me</h5>
                            <p className="mb-5 monts1" style={{ opacity: 0.6 }}>
                                Graduated with a Bachelor of Computer Science.
                                And is currently working in several positions,
                                as E-Learning Specialist and Web Developer
                            </p>
                            <p className="text-lg-left text-sm-center">
                                <a href="/profile" className="btn btn-primary">
                                    More about me
                                </a>
                            </p>
                        </Col>
                        <Col lg="7" md="7">
                            <img
                                src={image}
                                alt="images"
                                data-original="https://d17ivq9b7rppb3.cloudfront.net/original/commons/homepage-hero.png"
                                className="imagebg"
                                width={578}
                                height={376}
                            />
                        </Col>
                    </Row>
                </Container>
                <Pokemon />
            </>
        );
    }
}
