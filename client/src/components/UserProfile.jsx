import React from "react";

const UserProfile = ({user, setUser}) => {

    return(
        <>
            <h1>Profile</h1>
            <ul>{user.username}</ul>
            <ul></ul>
        </>

    )
}

export default UserProfile; 