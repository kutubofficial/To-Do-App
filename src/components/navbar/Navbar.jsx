import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginUser, setLoginUser] = useState(false);
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
              <Link>Logout</Link>
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
