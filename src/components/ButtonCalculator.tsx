import * as React from "react";
import { Button } from "react-bootstrap";

export interface ButtonProps {
    label: string;
}

export class ButtonCalculator extends React.Component<ButtonProps, {}> {
    render() {
        return <Button>{this.props.label}</Button>
    }
}
