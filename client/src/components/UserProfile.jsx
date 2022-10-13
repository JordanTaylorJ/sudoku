import React, {useState} from "react";
import Login from './Login';
import ReadUserInfo from "./ReadUserInfo";
import EditUserInfo from "./EditUserInfo";

const UserProfile = ({user, setUser}) => {

    const [editUser, setEditUser] = useState(false);

    function handleEditUser() {
        if (editUser === true){
            setEditUser(false)
        } else {
            setEditUser(true)
        }
    }

    console.log('are we editing?', editUser)

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
                {editUser 
                    ? <EditUserInfo user={user}/>
                    : <ReadUserInfo user={user}/>
                }
                <button onClick={handleEditUser}>Edit User Profile</button>

            </>

        )
    }
}

export default UserProfile; 