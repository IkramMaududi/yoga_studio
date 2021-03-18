import React, {useState} from 'react';
import './Login.css';
import Axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // functions for submit button & input change
    const usernameChange = e => setUsername(e.target.value);
    const passwordChange = e => setPassword(e.target.value);
    const loginClick = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/user/login', {
                username, password
            });
            if(response.data.loggedIn) {
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('username', response.data.username); 
                window.location = '/';
            } else {
                setErrorMessage(response.data.message);
            };
            console.log(response);
        } catch (err) {
            console.error(err.message);
        };
    };

    return (
        <div className="Login">
            <h1>Login</h1>
            <div className="LoginForm">
                <input type='text' placeholder='Username' onChange={usernameChange} />
                <input type='password' placeholder='Password' onChange={passwordChange} />
                <button onClick={loginClick}>Login</button>
                <h1 style={{color:"red"}}>{errorMessage}</h1>
            </div>
        </div>
    );
};

export default Login;