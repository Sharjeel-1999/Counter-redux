import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="button"
        aria-label="Increment"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <span className="value">Count:{count}</span>
      <button
        className="button"
        aria-label="Decrement"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
