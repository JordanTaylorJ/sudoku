import React, {useState} from "react";

const EditUserInfo = ({user}) => {

    const [updateUser, setUpdateUser] = useState({
        username: user.username,
        password: "",
        new_password: ""
    });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value 
        const name = e.target.name
        setUpdateUser({...updateUser, [name]:value});
    }
    console.log(updateUser)

    const handleUserUpdate = (e) => {
        e.preventDefault();
        fetch("/users/update",{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUser)
        })
        .then((r) => {
            if (r.ok){
                setErrors([])
            } else {
                r.json().then((r) => setErrors(r.error))
            }
        })
    }

    return (
        <>
        <br/>
        <form>
            <label> Old Password: 
                <input 
                    type='text' 
                    name='password' 
                    placeholder="enter old password..."
                    onChange={(e) => handleChange(e)} 
                />
            </label>
            <br/>
            <label> New Password: 
                <input 
                    type='text' 
                    name='new_password' 
                    placeholder="enter new password..." 
                    onChange={(e) => handleChange(e)} 
                />
            </label>
            <br/>
            <input type='submit' value='Submit' onClick={(e) => handleUserUpdate(e)} />
        </form>
        <ul> {errors}</ul>
        </>
    )
}
export default EditUserInfo; 