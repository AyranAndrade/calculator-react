import * as React from "react";
import { Button } from "react-bootstrap";

export interface ButtonProps {
    label: string,
    onClick: () => void;
}

export class ButtonCalculator extends React.Component<ButtonProps, {}> {
    render() {
        return <Button onClick={() => this.props.onClick()}>{this.props.label}</Button>
    }
}
