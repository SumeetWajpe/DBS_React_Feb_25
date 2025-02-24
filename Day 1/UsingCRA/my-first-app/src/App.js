import "./App.css";
import React from "react";
import Message from "./Message";
class App extends React.Component {
  render() {
    return (
      <div>
        <Message msg="Hello" />
        <Message msg="Hi" />
        <Message msg="Bye" />
      </div>
    );
  }
}

export default App;
