import React, { useState } from "react";

const NewCourse = () => {
  const [title, setTitle] = useState("");
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault(); // prevent browser from reloading
        console.log(title);
      }}
    >
      <label htmlFor="txtTitle">Title : </label>
      <input
        type="text"
        id="txtTitle"
        onInput={(e: any) => setTitle(e.target.value)}
      />

      <button className="btn btn-success">Add New Course</button>
    </form>
  );
};

export default NewCourse;
