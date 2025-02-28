import React, { useEffect } from "react";
import { CourseModel } from "../../models/course.model";
import Course from "../course/course";
import { useDispatch, useSelector } from "react-redux";
import { SagaActions } from "../../saga/sagaactions";

const ListOfCourses: React.FC = () => {
  const courses = useSelector((store: any) => store.courses);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: SagaActions.FETCH_ALL_COURSES });
  // }, []);

  return (
    <div className="row">
      <header>
        <h1> List Of Courses</h1>
      </header>

      {courses.length == 0
        ? "Loading.."
        : courses.map((course: CourseModel) => (
            <Course key={course.id} coursedetails={course} />
          ))}

      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: SagaActions.FETCH_ALL_COURSES })}
      >
        Get All Courses
      </button>
    </div>
  );
};

export default ListOfCourses;

// Class based component
// export default class ListOfCourses extends Component {
//   courses: CourseModel[] = [
//     {
//       id: 1,
//       title: "React",
//       price: 5000,
//       likes: 400,
//       rating: 5,
//       imageUrl:
//         "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg",
//     },
//     {
//       id: 2,
//       title: "Redux",
//       price: 4000,
//       likes: 600,
//       rating: 5,
//       imageUrl:
//         "https://negativeepsilon.com/media/attachments/blobs/2023/01/09/PNbZQxCiPVkNWzDNPDx24j_redux_rm05scp.png_riwC4kc5pLH7k1e5ReNajv_2FOQ.webp",
//     },
//     {
//       id: 3,
//       title: "Node",
//       price: 6000,
//       likes: 900,
//       rating: 4,
//       imageUrl:
//         "https://blog.logrocket.com/wp-content/uploads/2022/10/Building-simple-login-form-node-js.png",
//     },
//     {
//       id: 4,
//       title: "Angular",
//       price: 5000,
//       likes: 200,
//       rating: 3,
//       imageUrl:
//         "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2019/03/angular-blog.png?fit=1600%2C795&ssl=1",
//     },
//     {
//       id: 5,
//       title: "Flutter",
//       price: 7000,
//       likes: 700,
//       rating: 4,
//       imageUrl:
//         "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
//     },
//   ];
//   render() {
//     return (
//       <div className="row">
//         {this.courses.map((course: CourseModel) => (
//           <Course coursedetails={course} />
//         ))}
//       </div>
//     );
//   }
// }
