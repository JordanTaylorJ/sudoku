import React, {useState} from 'react';

const Login = ({setUser}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username, 
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

    return(
        <div>
            <br/>
            <form
            onSubmit={(e) => handleSubmit(e, username, password)}
            >
                <label>
                    Username: 
                    <input 
                        type='text'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <label>
                    Password: 
                <input 
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <input type='submit' value="submit"/>    
                <ul> {errors}</ul>
            </form>
        </div>
    )

}

export default Login;