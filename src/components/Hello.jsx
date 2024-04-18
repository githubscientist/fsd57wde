import { Component } from "react";

class Hello extends Component {
    render() {

        return (
            <p>Hello { this.props.user }!</p>
        )
    }
}

export default Hello;