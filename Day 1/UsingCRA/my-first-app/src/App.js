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
      to: "James",
      imageUrl:
        "https://media.istockphoto.com/id/1496192609/vector/hello-written-speech-bubble-on-yellow-background.jpg?s=612x612&w=0&k=20&c=WGz6PfIO8lVjj3FkgDYZYMpfXFFyIjTIm_mg1aQc-lA=",
    },
    {
      msg: "Bye",
      from: "John",
      to: "James",
      imageUrl:
        "https://media.istockphoto.com/id/1496192609/vector/hello-written-speech-bubble-on-yellow-background.jpg?s=612x612&w=0&k=20&c=WGz6PfIO8lVjj3FkgDYZYMpfXFFyIjTIm_mg1aQc-lA=",
    },
  ];
  render() {
    return (
      <div>
        {this.messages.map(m => (
          <Message messagedetails={m} />
        ))}

        {/* <Message
          msg="Hi"
          from="James"
          to="Bond"
          imageUrl="https://media.istockphoto.com/id/1496192609/vector/hello-written-speech-bubble-on-yellow-background.jpg?s=612x612&w=0&k=20&c=WGz6PfIO8lVjj3FkgDYZYMpfXFFyIjTIm_mg1aQc-lA="
        />
        <Message
          msg="Bye"
          from="Peter"
          to="Parker"
          imageUrl="https://media.istockphoto.com/id/1496192609/vector/hello-written-speech-bubble-on-yellow-background.jpg?s=612x612&w=0&k=20&c=WGz6PfIO8lVjj3FkgDYZYMpfXFFyIjTIm_mg1aQc-lA="
        /> */}
      </div>
    );
  }
}

export default App;
