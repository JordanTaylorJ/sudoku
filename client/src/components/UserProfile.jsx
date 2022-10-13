import React from "react";
import Login from './Login';

const UserProfile = ({user, setUser}) => {

    console.log('user', user);

    if (!user) {
        return(
            <Login/>
        )
    } else{
        return(
            <>
                <br/>
                <h1>Profile</h1>
                <ul>username: {user.username}</ul>
                <ul></ul>
                <button>Edit User Profile</button>
            </>

        )
    }
}

export default UserProfile; 