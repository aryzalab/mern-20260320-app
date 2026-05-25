import React from "react";
import { useCounterState } from "../stores/counterStore";

const ComponentE = () => {
  const increaseCount = useCounterState((state) => state.increaseCount);
  const decreaseCount = useCounterState((state) => state.decreaseCount);
  const resetCount = useCounterState((state) => state.resetCount);

  return (
    <div>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
};

export default ComponentE;
