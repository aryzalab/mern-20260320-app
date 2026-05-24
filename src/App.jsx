import "./App.css";
import ComponentA from "./components/ComponentA";

function App() {
  const name = "Hari";

  return (
    <div>
      <h1 title="name">Hello {name}</h1>
      <ComponentA label="A" subtitle="sub of A" />
      <ComponentA label="B" />
      <ComponentA label="C" />
      <ComponentA label="D" />
      <ComponentA subtitle="sub of some last component" />
      <ComponentA label="F" />
    </div>
  );
}

export default App;
