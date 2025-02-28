import React, { useContext, useState } from "react";

const CounterContext = React.createContext({
  counter: 0,
  changeCount: () => {},
});

export default function GrandParent() {
  const [data, setData] = useState(100);
  return (
    <div>
      <h2>Grand Parent</h2>
      <CounterContext.Provider
        value={{
          counter: data,
          changeCount: () => {
            setData(data + 1);
          },
        }}
      >
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
  let ctx = useContext(CounterContext);
  return (
    <div>
      <h2>Child</h2>
      <p>The Count is - {ctx.counter}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => ctx.changeCount()}
      >
        ++
      </button>
    </div>
  );
}
