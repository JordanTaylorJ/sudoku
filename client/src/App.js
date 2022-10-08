import './App.css'; 
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Game from './components/Game';
import UserProfile from './components/UserProfile';


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
        <Navbar user={user} setUser={setUser} />
        <Routes>        
          <Route path='/' element={<Home user={user} />}/>
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/signup' element={<Signup setUser={setUser} />} />
          <Route path='/newgame' element={<Game/>} />
          <Route path='userprofile' element={<UserProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
