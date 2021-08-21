import React, { Component } from "react";

class InputEvent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default InputEvent1;
