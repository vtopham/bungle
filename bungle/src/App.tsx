import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/home';
import Search from './pages/search';

function App() {
  return (
    <div className="App">
        <h1>This is the app</h1>
        <Router>
            <Routes>
                <Route path = "/search" element = {<Search/>}/>
                <Route path = "/" element = {<Home/>}/>
            </Routes>
            
        </Router>

    </div>
  );
}

export default App;
