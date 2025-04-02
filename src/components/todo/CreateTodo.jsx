import axios from "axios";
import { useState } from "react";

const CreateTodo = () => {
  const [todos, setTodos] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todos.title.trim() !== "") {
      try {
        const token = localStorage.getItem("token");

        let response = await axios.post(
          "http://localhost:9001/v1/todos/add",
          todos,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setTodos({ title: "", description: "", priority: "", dueDate: "" });
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Add a new task"
            value={todos.title}
            onChange={handleChange}
          />
        </label>

        <label>
          Priority:
          <input
            type="radio"
            name="priority"
            value="low"
            checked={todos.priority === "low"}
            onChange={handleChange}
          />
          Low
          <input
            type="radio"
            name="priority"
            value="medium"
            checked={todos.priority === "medium"}
            onChange={handleChange}
          />
          Medium
          <input
            type="radio"
            name="priority"
            value="high"
            checked={todos.priority === "high"}
            onChange={handleChange}
          />
          High
        </label>

        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={todos.dueDate}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default CreateTodo;
