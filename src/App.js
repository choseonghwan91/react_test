import React, { Component } from "react";
import "./App.css";
import ButtonEvent1 from "./component/event_compn/ButtonEvent1";
import InputEvent1 from "./component/event_compn/InputEvent1";
import TestEvent from "./component/event_compn/TestEvent";

class App extends Component {
  render() {
    return (
      <div>
        <ButtonEvent1 />
        <InputEvent1 />
        <TestEvent />
      </div>
    );
  }
}

export default App;
