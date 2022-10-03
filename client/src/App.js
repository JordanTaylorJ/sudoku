import './App.css'; 
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';


function App() {

  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>        
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
