import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function expensiveCalculation() {
  let res = 0;
  for (let i = 0; i < 10000; i++) {
    res += i;
  }
  return res;
}

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo"]);

  let result = useMemo(() => expensiveCalculation(), [todos]);

  const addTodo = () => {
    setTodos((prev) => [...prev, "new Todo"]);
  };

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <>
      <h1>Todo App</h1>
      {todos.map((todo, ind) => (
        <h3 key={ind}>{todo}</h3>
      ))}

      <button onClick={addTodo}>Add Todo</button>

      <hr />

      <Counter count={count} increment={increment} />
    </>
  );
}

export default App;


// import { useCallback, useMemo, useState } from "react";
// import "./App.css";
// import Counter from "./Components/Counter";

// function expensiveCalculation(todos) {
//   let res = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     res += i;
//   }
//   return res;
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo"]);

//   const result = useMemo(() => expensiveCalculation(todos), [todos]);

//   const addTodo = () => {
//     setTodos((prev) => [...prev, "new Todo"]);
//   };

//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, [setCount]);

//   return (
//     <>
//       <h1>Todo App</h1>
//       {todos.map((todo, ind) => (
//         <h3 key={ind}>{todo}</h3>
//       ))}

//       <button onClick={addTodo}>Add Todo</button>

//       <hr />

//       <Counter count={count} increment={increment} />
//     </>
//   );
// }

// export default App;
