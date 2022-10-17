import React /*{useState}*/ from "react";

const EditUserInfo = ({user}) => {
/*
    const [updateUser, setUpdateUser] = useState({
        password: "",
        new_password: "",
        confirmation_password: ""
    })
*/
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