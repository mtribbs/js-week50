
import { Component } from "react";

class BrokenButton extends Component {
    constructor(props) {
        super(props);
        //initial state is going to be false
        this.state = {clicked: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({clicked: true});
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? "Clicked" : "Not clicked"}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default BrokenButton;

// has state

// react doesn't know what "this" is in the upper functions when used in render
// need to bind "this"