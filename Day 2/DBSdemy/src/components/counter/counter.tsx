import { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(100); // 16.8 -> useState Hook !
  return (
    <>
      <p>Count : {counter}</p>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        {" "}
        ++{" "}
      </button>
    </>
  );
};

export default Counter;
