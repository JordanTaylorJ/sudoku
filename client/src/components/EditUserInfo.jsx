import React /*{useState}*/ from "react";

const EditUserInfo = ({user}) => {
/*
    const [updateUser, setUpdateUser] = useState({
        password: "",
        new_password: "",
        confirmation_password: ""
    })
*/
    const handleChange = () => {

    }

    return (
        <>
        <br/>
        <form>
            <label> Old Password: 
                <input 
                    type='text' 
                    name='old password' 
                    placeholder="enter old password..." 
                />
            </label>
            <br/>
            <label> New Password: 
                <input 
                    type='text' 
                    name='new password' 
                    placeholder="enter new password..." 
                />
            </label>
            <br/>
            <label> New Password Confirmation:  
                <input 
                    type='text' 
                    name='confirmation password' 
                    placeholder="enter new password..." 
                />
            </label>
        </form>
        </>
    )
}
export default EditUserInfo; 