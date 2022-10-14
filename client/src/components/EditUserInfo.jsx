import React from "react";

const EditUserInfo = ({user}) => {
    return (
        <form>
            <label> Old Password: 
                <input type='text' name='username' placeholder="enter new username..." />
            </label>
            <label> New Password: 
                <input type='text' name='username' placeholder="enter new username..." />
            </label>
            <label> Password Confirmation:  
                <input type='text' name='username' placeholder="enter new username..." />
            </label>
        </form>
    )
}
export default EditUserInfo; 