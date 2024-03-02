import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setPath, selectPreviousComponent } from "../../store/navigationSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const previousPath = location.state?.from || '/';

  useEffect(() => {
    dispatch(setPath("/posts"));
  }, [dispatch]);

  return (
    <div>
      <h2>Posts Page</h2>
      <p>Previous Component: {previousPath}</p>
    </div>
  );
};

export default Posts;
