import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllTodos = () => {
  const [todos, setTodos] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getTodos = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          navigate("/login");
          return;
        }
        const { data } = await axios.get("http://localhost:9001/v1/todos/all", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setTodos(data);
      } catch (err) {
        console.error(
          "Error fatching All-Todo:",
          err.response?.data?.message || err.message
        );
        navigate("/login");
      }
    };
    getTodos();
  }, []);

  return (
    <div>
      {/* {todos?.map((todo) => (
        <div key={todo._id}>{todo.title}</div>
      ))} */}
    </div>
  );
};

export default AllTodos;
