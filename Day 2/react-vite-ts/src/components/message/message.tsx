import React from "react";

export type MessageDetails = {
  from: string;
  to: string;
  msg: string;
  imageUrl: string;
};

type MessageProps = {
  messagedetails: MessageDetails;
};

export default class Message extends React.Component<MessageProps> {
  render(): React.ReactNode {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.messagedetails.imageUrl}
            className="card-img-top"
            alt={this.props.messagedetails.msg}
            height="200"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.messagedetails.msg}</h5>
            <p className="card-text">From : {this.props.messagedetails.from}</p>
            <p className="card-text">To : {this.props.messagedetails.to}</p>
          </div>
        </div>
      </div>
    );
  }
}
