import React, { useContext, useState } from "react";

const CounterContext = React.createContext(0);

export default function GrandParent() {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h2>Grand Parent</h2>
      <CounterContext.Provider value={count}>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
}

export function Parent() {
  return (
    <div>
      <h2> Parent</h2>
      <Child />
    </div>
  );
}

export function Child() {
  const count = useContext(CounterContext);
  return (
    <div>
      <h2>Child</h2>
      <p>The Count is - {count}</p>
    </div>
  );
}
