import React, {useState} from 'react'
import './Login.css';
import Axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/user/login', {
                username, password
            });
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
            </div>
        </div>
    );
};

export default Login;