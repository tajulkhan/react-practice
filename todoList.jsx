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
// import React, { useState, useEffect } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState(() => {
//     const savedTodos = localStorage.getItem("todos");
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });
//   const [input, setInput] = useState("");
//   const [filter, setFilter] = useState("all"); // "all", "completed", "pending"

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

//   // Filter todos based on selection
//   const filteredTodos = todos.filter((todo) => {
//     if (filter === "completed") return todo.completed;
//     if (filter === "pending") return !todo.completed;
//     return true; // "all"
//   });

//   return (
//     <div>
//       <h2>Todo List (Filtering ✅)</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a todo..."
//       />
//       <button onClick={addTodo}>Add</button>

//       {/* Filter Buttons */}
//       <div>
//         <button onClick={() => setFilter("all")}>All</button>
//         <button onClick={() => setFilter("completed")}>Completed</button>
//         <button onClick={() => setFilter("pending")}>Pending</button>
//       </div>

//       <ul>
//         {filteredTodos.map((todo, index) => (
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
// Todo List (Edit Todos ✏️) -------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState(() => {
//     const savedTodos = localStorage.getItem("todos");
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });
//   const [input, setInput] = useState("");
//   const [filter, setFilter] = useState("all"); // "all", "completed", "pending"
//   const [editIndex, setEditIndex] = useState(null); // Track which todo is being edited
//   const [editText, setEditText] = useState(""); // Temporary edit text

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

//   const startEditing = (index, text) => {
//     setEditIndex(index);
//     setEditText(text);
//   };

//   const saveEdit = (index) => {
//     setTodos((prev) =>
//       prev.map((todo, i) =>
//         i === index ? { ...todo, text: editText } : todo
//       )
//     );
//     setEditIndex(null);
//     setEditText("");
//   };

//   const filteredTodos = todos.filter((todo) => {
//     if (filter === "completed") return todo.completed;
//     if (filter === "pending") return !todo.completed;
//     return true;
//   });

//   return (
//     <div>
//       <h2>Todo List (Edit Todos ✏️)</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a todo..."
//       />
//       <button onClick={addTodo}>Add</button>

//       {/* Filter Buttons */}
//       <div>
//         <button onClick={() => setFilter("all")}>All</button>
//         <button onClick={() => setFilter("completed")}>Completed</button>
//         <button onClick={() => setFilter("pending")}>Pending</button>
//       </div>

//       <ul>
//         {filteredTodos.map((todo, index) => (
//           <li key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//             {editIndex === index ? (
//               <>
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button onClick={() => saveEdit(index)}>💾 Save</button>
//                 <button onClick={() => setEditIndex(null)}>❌ Cancel</button>
//               </>
//             ) : (
//               <>
//                 {todo.text} 
//                 <button onClick={() => toggleComplete(index)}>✔</button>
//                 <button onClick={() => startEditing(index, todo.text)}>✏️ Edit</button>
//                 <button onClick={() => removeTodo(index)}>❌</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;
//Todo List (Dark Mode 🌙) --------------------------------------------------

import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "completed", "pending"
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos((prev) => [...prev, { text: input, completed: false }]);
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

  const startEditing = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const saveEdit = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, text: editText } : todo
      )
    );
    setEditIndex(null);
    setEditText("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List (Dark Mode 🌙)</h2>

      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

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
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>💾 Save</button>
                <button onClick={() => setEditIndex(null)}>❌ Cancel</button>
              </>
            ) : (
              <>
                {todo.text} 
                <button onClick={() => toggleComplete(index)}>✔</button>
                <button onClick={() => startEditing(index, todo.text)}>✏️ Edit</button>
                <button onClick={() => removeTodo(index)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;




