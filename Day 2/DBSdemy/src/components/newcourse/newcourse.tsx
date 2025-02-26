import React, { useState } from "react";
import { CourseModel } from "../../models/course.model";

type NewCourseProps = {
  AddANewCourse: (nc: CourseModel) => void;
};

const NewCourse: React.FC<NewCourseProps> = (props: NewCourseProps) => {
  const [newCourse, setNewCourse] = useState<CourseModel>(
    new CourseModel(0, "", 0, 0, 0, ""),
  );
  return (
    <>
      <div>
        <h1>New Course</h1>
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={e => {
              e.preventDefault(); // prevent the browser from reloading the page
              props.AddANewCourse(newCourse);
            }}
          >
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtCourseId">Id : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtCourseId"
                  onChange={
                    e =>
                      setNewCourse({
                        ...newCourse,
                        id: parseInt(e.target.value),
                      }) // converts string to number
                  }
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtCourseTitle">Title : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  id="txtCourseTitle"
                  onChange={e => {
                    setNewCourse({ ...newCourse, title: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtCoursePrice">Price : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtCoursePrice"
                  onChange={e => {
                    setNewCourse({
                      ...newCourse,
                      price: parseInt(e.target.value),
                    });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtCourseRating">Rating : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtCourseRating"
                  onChange={e => {
                    setNewCourse({
                      ...newCourse,
                      rating: parseInt(e.target.value),
                    });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtCourseLikes">Likes : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtCourseLikes"
                  onChange={e => {
                    setNewCourse({
                      ...newCourse,
                      likes: parseInt(e.target.value),
                    });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtCourseImageUrl">Image : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  id="txtCourseImageUrl"
                  onChange={e => {
                    setNewCourse({ ...newCourse, imageUrl: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <button className="btn btn-success">
                  Add new Course{" "}
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCourse;
