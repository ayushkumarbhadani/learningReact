import { useReducer } from "react";
const reducer = (state, action) => {
  if (action === "inc") {
    return state + 1;
  } else if (action === "reset") {
    return 0;
  } else if (action === "dec") {
    return state - 1;
  }
};
const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("dec")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("inc")}>Increment</button>
    </>
  );
};
export default App;
