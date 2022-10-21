import React from "react";
import Login from './Login';
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const UserProfile = ({user, setUser}) => {

    if (!user) {
        return(
            <Login/>
        )
    } else{
        return(
            <>
                <br/>
                <h1>Profile</h1>
                <ul>Username: {user.username}</ul>
                <Button 
                    component={Link} to='/edituser' 
                >Change Password</Button>
                <br/>
                <Button>Delete Account</Button>

            </>

        )
    }
}

export default UserProfile; 