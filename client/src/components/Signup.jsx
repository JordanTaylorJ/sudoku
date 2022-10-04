import React, {useState} from 'react';


const Signup = () => {
    const [username, setUsername] = useState("");
    return(
        <form>
            <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
    );
}

export default Signup;