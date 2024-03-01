import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Posts = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const onBackClick= ()=> navigate(location.state?.from || '/');

  return (
    <div><h2>Posts page</h2> 
    <button onClick={onBackClick}>onBack</button></div>
  )
}

export default Posts