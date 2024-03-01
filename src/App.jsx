import React from 'react'
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom"
import { Home, Posts, Users, Main, UserDetails } from './pages'

const App = () => {
  return (
    <Router>
        <Routes>
        <Route element={<Main/>}path='/'>

            <Route element={<Home/>} path='/' />
            <Route element={<Users/>} path='/users' />
            <Route element={<UserDetails/>} path='/users/:id' />
            <Route element={<Posts/>} path='/posts' />
            <Route element={<div>404</div>} path='/notfound' />
            <Route element={<Navigate to='/notfound'/>} path='/*' />


        </Route>
        </Routes>
    </Router>
  )
}

export default App