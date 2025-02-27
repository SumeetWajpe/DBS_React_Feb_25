import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [theCourse, setTheCourse] = useState<any>({});
  useEffect(() => {
    axios
      .get(`http://localhost:3500/courses/${id}`)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setTheCourse(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // console.log("Done !");
  }, []);
  return (
    <div>
      <header>
        <h1>Course details for {id}</h1>
      </header>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theCourse.imageUrl}
              className="card-img-top"
              alt="..."
              height="100%"
            />
          </div>
          <div className="col-md-3">
            <h2>{theCourse.title}</h2>
            <button className="btn btn-primary">
              {theCourse.likes} <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
