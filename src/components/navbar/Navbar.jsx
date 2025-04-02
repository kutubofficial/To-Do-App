import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [loginUser, setLoginUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setLoginUser(!!token);
  }, [loginUser]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:9001/v1/users/logout",
        {},
        { withCredentials: true }
      );
      setLoginUser(false);
      localStorage.removeItem("authToken");
      toast.success("Logged out");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err.response?.data || err.message);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">TO-DO</h1>
        <hr />
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          {loginUser ? (
            <>
            <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <Link onClick={handleLogout} className="nav-link">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
