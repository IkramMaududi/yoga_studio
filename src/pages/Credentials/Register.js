import React, {useState} from 'react';
import './Register.css';
import Axios from 'axios';

function Register() {
    // state of the data to be sent
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // data & destination to be sent
    const url = 'http://localhost:3001/user/register';
    const reactData = { username, password };

    // functions for clicking submit button & changing input value
    const usernameChange = e => setUsername(e.target.value);
    const passwordChange = e => setPassword(e.target.value);
    const registerClick = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post(url, reactData );
            console.log(response);
        } catch (err) {
            console.error(err.message);
        };
    };

    return (
        <div className="Register">
            <h1>Registration</h1>
            <div className="RegisterForm">
                <input type='text' placeholder='Username' onChange={usernameChange} />
                <input type='password' placeholder='Password' onChange={passwordChange} />
                <button onClick={registerClick}>Register</button>
            </div>
        </div>
    );
};

export default Register;