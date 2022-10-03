import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
    
    const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");

    console.log("username from LOGIN", username)
    return(
        <div>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 10, width: '25ch' },}}
            
            autoComplete="off"
            >
                <TextField 
                    id="standard-basic" 
                    label="Username" 
                    variant="standard" 
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <TextField id="standard-basic" label="Password" variant="standard" />
            </Box>
            <Box>
                <button>Login</button>
                <button>Signup</button>
            </Box>
        </div>
    )

}

export default Login;