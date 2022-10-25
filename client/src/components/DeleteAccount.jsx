import React, {useState} from 'react';

const DeleteAccount = ({setUser}) => {

    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);

    const handleDeleteUser = (e) => {
        e.preventDefault()
        fetch("/destroy", {
            method: 'DELETE',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ 
                password 
            }),
        })
        .then((r) => {
            if (r.ok){
                r.json().then((r) => setUser(r))
                setErrors([])
            } else {
                r.json().then((r) => setErrors(r.error))
            }
        })
    }

    console.log("this password", password)

    return(
        <>
        <br/>
        <h2>User profile and score will be deleted. Type password to confirm:</h2>
        <form>
            <label> Password: 
                <input 
                    type='text' 
                    name='password' 
                    placeholder="Enter password..." 
                    onChange={(e) => setPassword(e.target.value)} 
                    />
            </label>
            <br/>
            <br/>
            <input type='submit' value='Delete Account' onClick={handleDeleteUser} />
        </form>
        </>
    )
}

export default DeleteAccount;