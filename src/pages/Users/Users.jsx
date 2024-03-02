import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPath, selectPreviousComponent } from "../../store/navigationSlice";
import { fetchUsers, selectUsers, selectLoading } from "../../store/usersSlice";
import "./Users.css";

const getShortValue = (value) => {
  if (value.length > 20) {
    return (
      <span>
        {value.substring(0, 20)}
        <span className="short-value">20+</span>
      </span>
    );
  } else {
    return value;
  }
};

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const previousComponent = useSelector(selectPreviousComponent);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(setPath(location.pathname));
  }, [dispatch, location.pathname]);

  const onBtnClick = () => navigate(-1);

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
      <p>Previous Component: {previousComponent}</p>
    </div>
  );
};

export default Users;
