import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Message from "../message/message";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
import NewCourse from "../newcourse/newcourse";
class App extends React.Component {
  render() {
    // return <ListOfCourses />;
    // return <Message msg="Hey !" />;
    // return <Counter />;
    // return <Posts />;
    return <NewCourse />;
  }
}

export default App;
