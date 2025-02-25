import "./App.css";
import React from "react";
import Message from "./Message";
class App extends React.Component {
  messages = [
    {
      msg: "Hello",
      from: "John",
      to: "James",
      imageUrl:
        "https://media.istockphoto.com/id/1496192609/vector/hello-written-speech-bubble-on-yellow-background.jpg?s=612x612&w=0&k=20&c=WGz6PfIO8lVjj3FkgDYZYMpfXFFyIjTIm_mg1aQc-lA=",
    },
    {
      msg: "Hey",
      from: "John",
      to: "Cater",
      imageUrl:
        "https://www.shutterstock.com/image-vector/hey-text-speech-bubble-hi-260nw-2328471449.jpg",
    },
    {
      msg: "Bye",
      from: "Peter",
      to: "Parker",
      imageUrl:
        "https://t4.ftcdn.net/jpg/09/31/35/03/360_F_931350340_AcabQENvih7ETypJOapmLp4xqGiICUCS.jpg",
    },
  ];
  render() {
    return (
      <div className="row">
        {this.messages.map(m => (
          <Message messagedetails={m} />
        ))}
      </div>
    );
  }
}

export default App;
