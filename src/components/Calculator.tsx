import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ButtonCalculator } from "./ButtonCalculator";

export class Calculator extends React.Component {
    private first: number;

    private second: number;

    private operation: string;

    private storeNumber(input: number): void {
        if (this.operation === undefined) {
            this.first = input;
        } else {
            this.second = input;
        }
    }

    private storeOperation(input: string): void {
        this.operation = input;
    }

    private doCalculation(): void {
        let result: number;

        if (this.operation === "+") {
            result = this.first + this.second;
        } else if (this.operation === "-") {
            result = this.first - this.second;
        } else if (this.operation === "*") {
            result = this.first * this.second;
        } else if (this.operation === "/") {
            result = this.first/this.second;
        }

        this.operation = undefined;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ButtonCalculator label="7" onClick={() => this.storeNumber(7)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="8" onClick={() => this.storeNumber(8)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="9" onClick={() => this.storeNumber(9)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="/" onClick={() => this.storeOperation("/")}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonCalculator label="4" onClick={() => this.storeNumber(4)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="5" onClick={() => this.storeNumber(5)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="6" onClick={() => this.storeNumber(6)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="*" onClick={() => this.storeOperation("*")}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonCalculator label="1" onClick={() => this.storeNumber(1)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="2" onClick={() => this.storeNumber(2)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="3" onClick={() => this.storeNumber(3)}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="-" onClick={() => this.storeOperation("-")}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonCalculator label="0" onClick={() => this.storeNumber(0)}/>
                    </Col>
                    <Col xs={6}>
                        <ButtonCalculator label="=" onClick={() => this.doCalculation()}/>
                    </Col>
                    <Col>
                        <ButtonCalculator label="+" onClick={() => this.storeOperation("+")}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
