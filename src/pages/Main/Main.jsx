import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Main.css';

const Main = () => {

    const location = useLocation();
    console.log(location)
     
  return (
    <>
    <header>
        <Link to='/'state={{from:location.pathname}}>Home</Link>
        <br />
        <Link to='/users'state={{from:location.pathname}}>Users</Link>
        <br />
        <Link to='/posts'state={{from:location.pathname}}>Posts</Link>

    </header>
    <Outlet/>
    </>
  )
}

export default Main