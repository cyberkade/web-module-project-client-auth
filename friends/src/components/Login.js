import axios from "axios";
import React, {useState} from "react";

const initialState = {
        username: '',
        password: '',
}

const Login = (props) => {
    const [credentials, setCredentials] = useState(initialState)
    const [isLoading, setLoading] = useState(false)
    const { history } = props;
    
    const handleChange = (e) => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
        // console.log(credentials)
    }

    const login = e => {
        e.preventDefault();

        setLoading(true)

        axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            // console.log(res)
            setLoading(false)
            localStorage.setItem('token', res.data.payload)
            history.push("/friends")
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={login}>
            <label>
                Username:
                <input onChange={handleChange} type='text' name='username' value={credentials.username}></input>
            </label>
            <label>
                Password:
                <input onChange={handleChange} type='password' name='password' value={credentials.password} ></input>
            </label>
            {isLoading ? <h2>Please Wait!</h2> : <button type="submit">Submit</button>}
        </form>
    )
}

export default Login;