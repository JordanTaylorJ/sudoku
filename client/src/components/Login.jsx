import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Signup from './Signup';
import {Link} from 'react-router-dom';

const Login = ({setUser}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        .then((r) => r.json())
        .then((r) => console.log("USER logged in", r))
    }

    console.log("username from LOGIN", username);
    console.log("password from LOGIN", password);

    return(
        <div>
            <form
            //component="form"
            //sx={{'& > :not(style)': { m: 10, width: '25ch' },}}
            onSubmit={(e) => handleSubmit(e, username, password)}
            //autoComplete="off"
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
            </form>
            {/*<button>Login</button>
            <Box>
                
                <button component={Link} to={<Signup/>}>Signup</button>
            </Box>
            */}
        </div>
    )

}

export default Login;