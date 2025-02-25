import { Component } from "react";
import { CourseModel } from "../../models/course.model";

type CourseProps = {
  coursedetails: CourseModel;
};

export default class Course extends Component<CourseProps> {
  render() {
    return (
      <div className="col-md-3">
        <div className="card m-2 p-2 shadow rounded-0">
          <img
            src={this.props.coursedetails.imageUrl}
            className="card-img-top"
            alt="..."
            width="150px"
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.coursedetails.title}</h5>
            <p className="card-text">₹. {this.props.coursedetails.price}</p>

            <p className="cart-text">{this.props.coursedetails.rating}</p>
            <p className="cart-text">{this.props.coursedetails.likes} </p>
          </div>
        </div>
      </div>
    );
  }
}
