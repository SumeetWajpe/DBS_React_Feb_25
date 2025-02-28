import React, { memo } from "react";

function Child(props: any) {
  const { counter = 200 } = props;
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        margin: "20px",
        border: "1px solid red",
      }}
    >
      <h2>Child</h2>
      The Count is - (Child) {counter}
    </div>
  );
}

export default memo(Child);
