import React, {useState} from 'react';


const Signup = ({setUser}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
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
            } else {
                r.json().then((r) => setErrors(r))
            }
        })
    }


    return(
        <div>
            <form
            onSubmit={(e) => handleSubmit(e, username, password)}
            autoComplete="off"
            >
                <label>
                    Create Username: 
                    <input 
                        type='text'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <label>
                    Create Password: 
                <input 
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <input type='submit' value="submit"/>
            </form>
        </div>
    )

}

export default Signup;
