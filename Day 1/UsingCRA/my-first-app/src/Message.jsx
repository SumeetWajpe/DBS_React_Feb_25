import React from "react";

export default class Message extends React.Component {
  render() {
    return (
      <div className="col">
        <img
          src={this.props.messagedetails.imageUrl}
          alt={this.props.messagedetails.msg}
          height="200"
          width="200"
        />
        <h2> {this.props.messagedetails.msg} </h2>
        <p> From : {this.props.messagedetails.from}</p>
        <p> To : {this.props.messagedetails.to}</p>
      </div>
    );
  }
}
