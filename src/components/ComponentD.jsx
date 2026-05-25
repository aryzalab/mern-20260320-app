import React from "react";
import { useCounterState } from "../stores/counterStore";

const ComponentD = () => {
  const count = useCounterState((state) => state.count);

  return <div>count: {count}</div>;
};

export default ComponentD;
