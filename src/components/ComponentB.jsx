import { useEffect, useState } from "react";

// Create, Update, Destroy

function ComponentB() {
  const [result, setResult] = useState("dark"); // returns array, first element state value, second element function

  useEffect(
    // function
    () => {
      // do something here
      console.log("hello from use effect");

      return () => {
        // destroy/cleanup
      };
    },
    // dependency array (state variables)
    [result],
  );

  return (
    <div>
      <h1>state: {result}</h1>
      <button onClick={() => setResult(result == "dark" ? "light" : "dark")}>
        update state
      </button>
    </div>
  );
}

export default ComponentB;
