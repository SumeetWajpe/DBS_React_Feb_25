import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Posts from "../posts/posts";
import NewCourse from "../newcourse/newcourse";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/posts">Posts</a> */}
        {/* <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> */}
        <Navbar />
        <Routes>
          <Route path="/" Component={ListOfCourses} />
          <Route path="/posts" Component={Posts} />
          <Route path="/newcourse" Component={NewCourse} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
