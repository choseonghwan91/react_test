import React, { Component } from "react";
import "./TestEvent.css";

class TestEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      message: "값이 바뀌는곳",
    };
  }

  colorChange = () => {
    this.state.color === "blue"
      ? this.setState({ color: "red" })
      : this.setState({ color: "blue" });
    console.log(this.state.color);
  };

  render() {
    return (
      <div>
        <h1 className={this.state.color}>{this.state.message}</h1>
        <button onClick={this.colorChange}>색 바꾸기</button>
        <input
          type="text"
          placeholder="바꿀 값을 넣어주세요"
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

export default TestEvent;
