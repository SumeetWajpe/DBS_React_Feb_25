import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [anothercount, setAnotherCount] = useState(10);

  return (
    <>
      <h1>Parent</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>
          The Count is {count}
        </button>
        <button
          onClick={() => setAnotherCount(anothercount => anothercount + 1)}
        >
          The Another Count is {anothercount}
        </button>
      </div>
      <hr />
      <Child counter={count} />
    </>
  );
}

export default App;
