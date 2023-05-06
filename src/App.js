import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./home/Home";

import Login from "./pages/Login";
import Blogs from "./pages/Blogs";

import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />

        <Route path="Login" element={<Login />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
