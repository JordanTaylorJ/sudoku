import React, {useState} from "react";
import Login from './Login';
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const UserProfile = ({user, setUser}) => {

    const [editUser, setEditUser] = useState(false);

    if (!user) {
        return(
            <Login/>
        )
    } else{
        return(
            <>
                <br/>
                <h1>Profile</h1>
                <ul>{user.username}</ul>
                <Avatar align='center' sx={{ bgcolor: 'blue' }} >H</Avatar>
                <Button 
                    component={Link} to='/edituser' 
                >Change Password</Button>

            </>

        )
    }
}

export default UserProfile; 