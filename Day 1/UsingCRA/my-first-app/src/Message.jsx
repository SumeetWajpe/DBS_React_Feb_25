import React from "react";

export default class Message extends React.Component {
  render() {
    return <h2> {this.props.msg} </h2>;
  }
}
