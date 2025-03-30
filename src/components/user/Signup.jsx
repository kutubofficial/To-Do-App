import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputData, setInputData] = useState({
    profilePicture: null,
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value, // Update text input values
    });
  };

  const handleFileChange = (e) => {
    setInputData((data) => ({
      ...data,
      profilePicture: e.target.files[0], // Store the file object instead of a string
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    axios
      .post("http://localhost:9001/v1/users/register", inputData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure correct content type
        },
      })
      .then(() => {
        console.log("data submitted..");
        // Reset state
        setInputData({
          profilePicture: null,
          name: "",
          email: "",
          password: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        // console.log("ERROR", err.response.data.message[0]);
        toast.error(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>SIGNUP FORM</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Personal Details</h2>

        <label>
          Profile Picture:
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={inputData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={inputData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            required
            value={inputData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </label>

        <input type="submit" value="Submit" />
        <a href="/login">Already have an account? Login</a>
      </form>
    </div>
  );
};

export default Signup;
