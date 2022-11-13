import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;

  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  const userLink = () => {
    return (
      <li className="drop-nav">
        <Link to="#">
          <i className="fas fa-user" />
          <span className="text-light"> User </span>
          <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0,
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Prajwal Website</Link>
        </h1>
      </div>
      <ul style={transForm}>
        {isLogged ? (
          userLink()
        ) : (
          <li>
            <Link to="/login">
              <i className="fa-sharp fa-solid fa-user"></i> Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
