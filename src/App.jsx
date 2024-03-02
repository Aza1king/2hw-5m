// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Home, Posts, Users, Main, UserDetails } from "./pages";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Main />}>
            <Route element={<Home />} path="/" />
            <Route element={<Users />} path="/users" />
            <Route element={<UserDetails />} path="/users/:id" />
            <Route element={<Posts />} path="/posts" />
            <Route element={<div>404</div>} path="/notfound" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
