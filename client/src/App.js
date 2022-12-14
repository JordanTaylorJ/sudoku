import './App.css'; 
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import GamePlay from './components/GamePlay';
import UserProfile from './components/UserProfile';
import ScoreBoard from './components/ScoreBoard';
import EditUserInfo from './components/EditUserInfo';
import DeleteAccount from './components/DeleteAccount';
import PuzzleGenerator from './components/PuzzleGenerator';


function App() {

  const [user, setUser] = useState('');
  const [puzzles, setPuzzles] = useState({});
  
  useEffect(() => { 
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(currentUser => setUser(currentUser))
      }
    })
  }, []);
    
  useEffect(() => {
      fetch('/games')
      .then(r => r.json())
      .then(r => setPuzzles(r))
  }, [])

  console.log("USER", user)
  console.log("This should be the games with users and scores associated", puzzles)
  
  
  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>        
          <Route path='/' element={<Home user={user} />}/>
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/signup' element={<Signup setUser={setUser} />} />
          <Route path='/newgame' element={<GamePlay user={user} puzzles={puzzles}/>} />
          <Route path='/userprofile' element={<UserProfile user={user} setUser={setUser} />} />
          <Route path='/scoreboard' element={<ScoreBoard puzzles={puzzles}/>} />
          <Route path='/edituser' element={<EditUserInfo user={user}/>} />
          <Route path='/deleteaccount' element={<DeleteAccount user={user} setUser={setUser}/>} />
          <Route path='/generategames' element={<PuzzleGenerator/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
