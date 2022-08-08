import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders';
import ResumeBank from './pages/Resume';
import Job from "./pages/Jobs/job";

function App () {
  return (
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<div></div>} />
            <Route exact path="/job" element={<Job/>} />
            <Route exact path="/candidate" element={<Orders/>} />
            <Route exact path="/resume-bank" element={<ResumeBank />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;