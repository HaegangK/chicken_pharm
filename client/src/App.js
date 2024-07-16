/** @format */
/**
File Name : App
Description : app.js
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
*/ 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
