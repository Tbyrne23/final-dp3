/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Song from './pages/about';
import Sponsors from './pages/sponsor';
import SongDark from './pages/songsDark';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/songs' element={<Song/>} />
         <Route path='/songsDark' element={<SongDark/>} />
        <Route path='/sponsor' element={<Sponsors/>} />
        
    </Routes>
    </Router>
);
}

  
export default App;
