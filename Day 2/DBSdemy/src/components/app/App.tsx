import React, { Suspense } from "react";
import ListOfCourses from "../listofcourses/listofcourses";
// import Posts from "../posts/posts";
import NewCourse from "../newcourse/newcourse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import CourseDetails from "../coursedetails/coursedetails";

// Lazy - Loading Post component
const Posts = React.lazy(() => import("../posts/posts"));
const Loading = () => {
  <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />;
};
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/posts">Posts</a> */}
        {/* <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> */}
        <Navbar />
        <Routes>
          <Route path="/" Component={ListOfCourses} />
          <Route path="/coursedetails/:id" Component={CourseDetails} />
          <Route path="/newcourse" Component={NewCourse} />
          <Route
            path="/posts"
            element={
              <Suspense
                fallback={
                  <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />
                }
              >
                <Posts />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <img src="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg" />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
