import React, { useEffect } from "react";
import axios from "axios";

const Posts: React.FC = () => {
  useEffect(() => {
    axios
      .get("", {})
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
    </div>
  );
};

export default Posts;
