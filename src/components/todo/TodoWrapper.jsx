import AllTodos from "./AllTodos";
import CreateTodo from "./CreateTodo";
import React, { useState } from "react";

const TodoWrapper = () => {
  const [todos, setTodos] = useState("");
  const handleSubmit = (e) => {
    if (todos.trim() !== "") {
      e.preventDefault();
      setTodos("");
    }
    console.log(todos);
  };
  const handle = (e) => {
    e.preventDefault();
    setTodos(e.target.value);
  };
  return (
    <div>
      <h1>TODO APP</h1>
      <CreateTodo todos={todos} handle={handle} handleSubmit={handleSubmit} />
      <AllTodos />
    </div>
  );
};

export default TodoWrapper;
