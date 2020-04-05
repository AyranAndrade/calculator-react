import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ButtonCalculator } from "./ButtonCalculator";

export class Calculator extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <ButtonCalculator label="7"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="8"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="9"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="/"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonCalculator label="4"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="5"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="6"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="*"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonCalculator label="1"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="2"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="3"/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="-"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonCalculator label="0"/>
                    </Col>
                    <Col xs={6}>
                        <ButtonCalculator label="="/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="+"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
