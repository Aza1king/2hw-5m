import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Users.css";

const getShortValue = (value) => {
    if (value.length > 20) {
      return (
        <span>
          {value.substring(0, 20)}<span className="short-value">20+</span>
        </span>
      );
    } else {
      return value;
    }
  };
  

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onBtnClick = () => navigate(-1);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="users-container">
      <h2>Users Page</h2>
      <button className="back-button" onClick={onBtnClick}>
        Back
      </button>

      <div className="user-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={`user-${user.id}`} className="user-item">
                <span className="user-info">
                  {getShortValue(user.name)} - {getShortValue(user.email)}
                </span>
                <Link className="more-link" to={`/users/${user.id}`}>
                  More...
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Users;
