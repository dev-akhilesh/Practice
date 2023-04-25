import { memo } from "react";

const Counter = ({ count, increment }) => {
  console.log("Child rendered");
  return (
    <div>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <button onClick={increment}>Increase Count</button>
    </div>
  );
};

export default memo(Counter);
