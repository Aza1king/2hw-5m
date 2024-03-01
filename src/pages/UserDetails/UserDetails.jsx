import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UserDetails.css'; // Подключаем файл стилей

const UserDetails = () => {
    const [posts, setPosts] = useState([]); 
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data); // Установка полученных данных в state
            })
            .catch(error => {
                console.error('Error fetching user posts:', error);
            });
    }, [params.id]);

    const onBackClick = () => navigate('/users');

    return (
        <div className="user-details-container">
            <h2>User Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};

export default UserDetails;
