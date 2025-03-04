import { useState } from "react";
import { CourseModel } from "../../models/course.model";
import Rating from "../rating/rating";
import { useDispatch } from "react-redux";
import {
  DeleteCourse,
  IncrementLikes,
} from "../../redux/reducers/courses.reducer";

type CourseProps = {
  coursedetails: CourseModel;
};

const Course: React.FC<CourseProps> = (props: CourseProps) => {
  const dispatch = useDispatch();
  return (
    <div className="col-md-3">
      <div className="card m-2 p-2 shadow rounded-0">
        <img
          src={props.coursedetails.imageUrl}
          className="card-img-top"
          alt="..."
          width="150px"
          height="150px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <p className="card-text">₹. {props.coursedetails.price}</p>

          <p className="cart-text">
            <Rating noofstars={props.coursedetails.rating} />
          </p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(IncrementLikes(props.coursedetails.id))}
          >
            {props.coursedetails.likes}{" "}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => dispatch(DeleteCourse(props.coursedetails.id))}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;

// export default class Course extends Component<CourseProps> {
//   state = { currLikes: 100 };
//   IncrementLikes() {
//     console.log("Within Increment Likes !");
//     // this.props.coursedetails.likes++; // props are readonly !
//     // console.log(this.state.currLikes++); // state is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }
//   render() {
//     return (
//       <div className="col-md-3">
//         <div className="card m-2 p-2 shadow rounded-0">
//           <img
//             src={this.props.coursedetails.imageUrl}
//             className="card-img-top"
//             alt="..."
//             width="150px"
//             height="150px"
//           />
//           <div className="card-body">
//             <h5 className="card-title">{this.props.coursedetails.title}</h5>
//             <p className="card-text">₹. {this.props.coursedetails.price}</p>

//             <p className="cart-text">
//               <Rating noofstars={this.props.coursedetails.rating} />
//             </p>
//             <button
//               className="btn btn-primary"
//               onClick={() => this.IncrementLikes()}
//             >
//               {/* {this.props.coursedetails.likes}{" "} */}
//               {this.state.currLikes}
//               <i className="fa-solid fa-thumbs-up"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
