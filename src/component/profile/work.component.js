import React, { Component } from "react";
import { Card, CardImg, Row, Col } from "reactstrap";
import portofolioImage1 from "../../assets/profile/portofolio1.png";
import portofolioImage2 from "../../assets/profile/portofolio2.png";
import portofolioImage3 from "../../assets/profile/portofolio3.png";
import portofolioImage4 from "../../assets/profile/portofolio4.png";
import portofolioImage5 from "../../assets/profile/portofolio5.png";
import portofolioImage6 from "../../assets/profile/portofolio6.png";
import portofolioImage7 from "../../assets/profile/portofolio7.png";
import portofolioImage8 from "../../assets/profile/portofolio8.png";
import portofolioImage9 from "../../assets/profile/portofolio9.png";
import portofolioImage10 from "../../assets/profile/portofolio10.png";
import portofolioImage11 from "../../assets/profile/portofolio11.png";

export default class WorkExperiences extends Component {
    render() {
        return (
            <section className="container mb-4">
                <h3 className="text-center mt-4 mb-4 font-weight-bolder">
                    - Work Experiences -
                </h3>
                <p className="text-center">
                    I never say that I am expert, or even proficient, I always
                    say that I am an amateur, who only has a willingness to
                    learn to understand more, and a high curiosity to explore
                    many things, especially in technology.
                </p>
                <Row>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage1}
                                    alt="portofolio1"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage2}
                                    alt="portofolio2"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage3}
                                    alt="portofolio3"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage4}
                                    alt="portofolio4"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage5}
                                    alt="portofolio5"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage6}
                                    alt="portofolio6"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage7}
                                    alt="portofolio7"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage1}
                                    alt="portofolio1"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage8}
                                    alt="portofolio8"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage9}
                                    alt="portofolio9"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage10}
                                    alt="portofolio10"
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col md="4" sm="3" xl="4" className="mt-4">
                        <a href="#1">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={portofolioImage11}
                                    alt="portofolio11"
                                />
                            </Card>
                        </a>
                    </Col>
                </Row>
            </section>
        );
    }
}
