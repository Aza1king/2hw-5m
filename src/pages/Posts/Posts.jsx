import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setPath, selectPreviousComponent } from "../../store/navigationSlice";
import { fetchUsers } from "../../store/usersSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const previousComponent = useSelector(selectPreviousComponent);

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {
      dispatch(setPath("/posts"));
    };
  }, [dispatch, location.pathname]);

  return (
    <div>
      <h2>Posts Page</h2>
      <p>Previous Component: {previousComponent}</p>
    </div>
  );
};

export default Posts;
