import React from 'react';
import Login from './Login';

const Home = ({user}) => {
    
    if (!user){
        return <Login />
    } else {
        return <h1>Welcome {user.username}!</h1>
    }
}

export default Home;