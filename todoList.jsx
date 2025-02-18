// import React, { useState } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     if (input.trim() === "") return;
//     setTodos((prev) => [...prev, input]);
//     setInput(""); // Clear input
//   };

//   const removeTodo = (index) => {
//     setTodos((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a todo..."
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo} <button onClick={() => removeTodo(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

// localstorage to store the data -------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState(() => {
//     // Load saved todos from localStorage
//     const savedTodos = localStorage.getItem("todos");
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });
//   const [input, setInput] = useState("");

//   // Save todos to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = () => {
//     if (input.trim() === "") return;
//     setTodos((prev) => [...prev, input]);
//     setInput(""); // Clear input
//   };

//   const removeTodo = (index) => {
//     setTodos((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h2>Todo List (With Local Storage)</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a todo..."
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo} <button onClick={() => removeTodo(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

// Status mark done like -------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState(() => {
//     const savedTodos = localStorage.getItem("todos");
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = () => {
//     if (input.trim() === "") return;
//     const newTodo = { text: input, completed: false };
//     setTodos((prev) => [...prev, newTodo]);
//     setInput("");
//   };

//   const removeTodo = (index) => {
//     setTodos((prev) => prev.filter((_, i) => i !== index));
//   };

//   const toggleComplete = (index) => {
//     setTodos((prev) =>
//       prev.map((todo, i) =>
//         i === index ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <div>
//       <h2>Todo List (Mark as Done ✅)</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a todo..."
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//             {todo.text} 
//             <button onClick={() => toggleComplete(index)}>✔</button>
//             <button onClick={() => removeTodo(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;
// Todo List (Filtering ✅) -------------------------------------------------------------------------
import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "completed", "pending"

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = { text: input, completed: false };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter todos based on selection
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // "all"
  });

  return (
    <div>
      <h2>Todo List (Filtering ✅)</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button onClick={addTodo}>Add</button>

      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text} 
            <button onClick={() => toggleComplete(index)}>✔</button>
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;


