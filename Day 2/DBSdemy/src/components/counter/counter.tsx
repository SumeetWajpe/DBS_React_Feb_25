import { useState } from "react";

type CounterState = {
  counter: number;
  age: number;
};

const Counter: React.FC = () => {
  // const [counter, setCounter] = useState<number>(100); // 16.8 -> useState Hook !
  // const [age, setAge] = useState<number>(18); // 16.8 -> useState Hook !

  const [myState, setMyState] = useState<CounterState>({
    counter: 200,
    age: 18,
  });
  return (
    <>
      <p>Count : {myState.counter}</p>
      <button
        className="btn btn-primary"
        onClick={() => setMyState({ ...myState, counter: myState.counter + 1 })}
      >
        {" "}
        Count ++{" "}
      </button>
      <hr />
      <p>Age : {myState.age}</p>
      <button
        className="btn btn-primary"
        onClick={() => setMyState({ ...myState, age: myState.age + 10 })}
      >
        {" "}
        ++{" "}
      </button>
    </>
  );
};

export default Counter;
