// src/pages/Main.js
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const location = useLocation();
  const previousPath = location.state?.from || "/";

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <br />
        <Link to="/users">Users</Link>
        <br />
        <Link to="/posts">Posts</Link>
      </header>
      <Outlet />
    </>
  );
};

export default Main;
