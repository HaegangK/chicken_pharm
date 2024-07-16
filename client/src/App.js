/** @format */
/**
File Name : App
Description : app.js
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
2024.07.16  임지영   Modified    Home -> Main(메인페이지)   
*/

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Search from './components/search/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
