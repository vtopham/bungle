import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/home';
import Search from './pages/search';
import Header from './components/header';

function App() {
  return (
    <div className="App">
        <Header/>
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
