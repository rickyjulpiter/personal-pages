import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./footer.styles.scss";

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col lg="6" xs="6" md="6" className="mx-auto">
                        <p className="text-center">&copy; Ricky Julpiter</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
