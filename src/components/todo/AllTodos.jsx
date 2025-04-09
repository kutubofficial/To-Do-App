import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTodos = async () => {
      try {
        const token = localStorage.getItem("authCookie");
        if (!token) return;

        const { data } = await axios.get("http://localhost:9001/v1/todos/all", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        setTodos(Array.isArray(data.allTodos) ? data.allTodos : []);
      } catch (err) {
        console.error(
          "Error fetching All-Todo:",
          err.response?.data?.message || err.message
        );
        navigate("/login");
      }
    };

    getTodos();
  }, [navigate]);

  return (
    <div className="todos-container">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo._id} className="todo-card">
            <h2>{todo.title}</h2>
            <p>
              <strong>Description:</strong> {todo.description}
            </p>
            <p>
              <strong>Priority:</strong> {todo.priority}
            </p>
            <p>
              <strong>Status:</strong> {todo.status ? "Completed" : "Pending"}
            </p>
            <p>
              <strong>Created At:</strong> {todo.createdAt}
            </p>
            <p>
              <strong>Due Date:</strong> {todo.dueDate}
            </p>
          </div>
        ))
      ) : (
        <p className="no-todos">Loading or no todos found...</p>
      )}
    </div>
  );
};

export default AllTodos;
