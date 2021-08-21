import React, { Component } from "react";

class ButtonEvent1 extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log("Click happened");
  };
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ButtonEvent1;
