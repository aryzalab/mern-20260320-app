import { useEffect, useState } from "react";

const ComponentC = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [id]);

  return (
    <div>
      <p>
        {todos.id}: {todos.title}
      </p>
      <button onClick={() => setId(id + 1)}>fetch next todos</button>
    </div>
  );
};

export default ComponentC;
