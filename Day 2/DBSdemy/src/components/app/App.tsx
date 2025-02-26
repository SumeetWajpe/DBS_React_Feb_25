import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Message from "../message/message";
import Counter from "../counter/counter";
class App extends React.Component {
  render() {
    // return <ListOfCourses />;
    // return <Message msg="Hey !" />;
    return <Counter />;
  }
}

export default App;
