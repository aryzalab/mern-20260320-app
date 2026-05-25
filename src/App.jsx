import { useEffect, useRef, useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";
import ComponentE from "./components/ComponentE";

function App() {
  const name = "Hari";
  const myRef = useRef();

  const [state, setState] = useState(1);
  // Redux, Zustand

  let count = 0;

  function increaseCount() {
    count++;
    console.log(count);
  }

  useEffect(() => {
    console.log(myRef.current);

    return () => {
      // destroy
    };
  }, []);

  return (
    <div>
      <ComponentD />
      <ComponentE />
      <ComponentB setState={setState} />
      <ComponentC state={state} />
      <h1 ref={myRef} title="name">
        Hello {name}
      </h1>
      <ComponentA label="A" subtitle="sub of A" />
      <ComponentA label="B" />
      <ComponentA label="C" />
      <ComponentA label="D" />
      <ComponentA subtitle="sub of some last component" />
      <ComponentA label="F" />
      <p>{count}</p>
      <button onClick={increaseCount}>click</button>
    </div>
  );
}

export default App;
