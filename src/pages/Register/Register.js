import React, {useState} from 'react';
import './Register.css';
import Axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/user/register', {
                username, password
            });
            console.log(response);
        } catch (err) {
            console.error(err.message);
        };
    };

    return (
        <div className="Register">
            <h1>Registration</h1>
            <div className="RegisterForm">
                <input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <button onClick={e => register(e)}>Register</button>
            </div>
        </div>
    );
};

export default Register;