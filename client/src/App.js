import './App.css'; 
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(currentUser => setUser(currentUser))
      }
    })
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>        
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
