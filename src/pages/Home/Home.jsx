import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPath, selectPreviousComponent } from "../../store/navigationSlice";

const Home = () => {
  const dispatch = useDispatch();
  const previousComponent = useSelector(selectPreviousComponent);

  useEffect(() => {
    dispatch(setPath("/home"));
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <p>Previous Component: {previousComponent}</p>
    </div>
  );
};

export default Home;
