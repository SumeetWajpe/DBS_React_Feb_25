import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Message from "../message/message";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
class App extends React.Component {
  render() {
    // return <ListOfCourses />;
    // return <Message msg="Hey !" />;
    // return <Counter />;
    return <Posts />;
  }
}

export default App;
