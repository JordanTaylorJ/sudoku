import React from 'react';
import picture from '../richard-bell-xFGRrdyd92E-unsplash.jpg';

const Home = ({user}) => {
    
    if (!user){
        return(
            <>
                <h1>Login to Play!</h1> 
                <img src={picture} alt="sudoku" className='photo'/>
            </>
        )
    } else {
        return(
            <>
                <h1>Welcome {user.username}!</h1>
                <img src={picture} alt="sudoku" className='photo'/>
            </>
        )
    }
    
        
}

export default Home;