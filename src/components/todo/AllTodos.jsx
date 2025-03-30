import axios from "axios";
import React, { useEffect, useState } from "react";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function getTodos() {
      try {
        const cookie = localStorage.getItem("authCookie");

        const { data } = await axios.get("http://localhost:9001/v1/todos/all", {
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
          withCredentials: true,
        });

        console.log(data.token);
        // console.log(cookie);
      } catch (err) {
        console.log("ERROR", err.response?.data?.message || err.message);
      }
    }

    getTodos();
  }, []);
  return <div>{/* TODO: Fetch and display all todos */}</div>;
};

export default AllTodos;
