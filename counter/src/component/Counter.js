import React from "react";
import "./Counter.css";
function Counter() {
  let [count, setCount] = React.useState(0);
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  function increase() {
    console.log(count);

    setCount(count + 1);
  }
  return (
    <>
      <div className="counter">
        <h1>{count}</h1>
        <div className="btn-container">
          <button className="prm-btn" onClick={decrease}>
            Decrease
          </button>
          <button className="prm-btn" onClick={reset}>
            Reset
          </button>
          <button className="prm-btn" onClick={increase}>
            Increase
          </button>
        </div>
      </div>
    </>
  );
}
export default Counter;
