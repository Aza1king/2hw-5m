import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onBtnClick = () => navigate("/users");

  return (
    <div>
      <h1>Home</h1>
      <button onClick={onBtnClick}>Navigate to users page</button>
    </div>
  );
};

export default Home;
