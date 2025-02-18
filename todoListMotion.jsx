import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
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
      <h2>Todo List (With Animations ✨)</h2>

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
        <AnimatePresence>
          {filteredTodos.map((todo, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
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
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoApp;
