import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectPath, setPath } from "../../store/navigationSlice";
import "./UserDetails.css";

const UserDetails = () => {
  const dispatch = useDispatch();
  const path = useSelector(selectPath);
  const navigate = useNavigate();
  const params = useParams();


  useEffect(() => {
    dispatch(setPath(`/users/${params.id}`));
  }, [dispatch, params.id]);

  const onBackClick = () => {
    dispatch(setPath("/users"));
    navigate("/users");
  };

  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user posts:", error);
      });
  }, [params.id]);

  return (
    <div className="user-details-container">
      <h2>User Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="back-container">
        <button onClick={onBackClick}>
          <p>Back to: {path.replace(/[^a-zA-Z]/g, "")}</p>
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
