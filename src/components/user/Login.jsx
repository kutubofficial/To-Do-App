import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9001/v1/users/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log("Login successful:", res.data.token);
        localStorage.setItem("authCookie", res.data.token);
        toast.success("Welcome!");

        setUserData({
          email: "",
          password: "",
        });
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "Login failed";
        console.log("ERROR:", errorMessage);
        toast.error(errorMessage);
        // navigate("/signup");
      });
  };

  return (
    <div>
      <h1>LOGIN FORM</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="enter password"
          required
        />

        <input type="submit" value="Login" />
        <a href="/signup">Don't have an account? Register</a>
      </form>
    </div>
  );
};
export default Login;
