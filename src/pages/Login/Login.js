import React, {useState} from 'react';
import './Login.css';
import Axios from 'axios';
// import {useHistory} from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // let history = useHistory();

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/user/login', {
                username, password
            });
            if(response.data.loggedIn) {
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('username', response.data.username); 
                window.location = '/';
                // history.push('/');
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
                <input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <button onClick={e => login(e)}>Login</button>
                <h1 style={{color:"red"}}>{errorMessage}</h1>
            </div>
        </div>
    );
};

export default Login;