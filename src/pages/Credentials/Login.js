import React, {useState} from 'react';
import Axios from 'axios';
import './Credentials.css';

function Login() {
    // data to be sent & its destination
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const url = 'http://localhost:3001/user/login';

    // error or successful message
    const [message, setMessage] = useState('');

    // functions for change in value & submit value
    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post( url, values );
            if(response.data.loggedIn) {
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('username', response.data.username); 
                setMessage(response.data.message);
                window.location = '/';
            } else {
                setMessage(response.data.message);
            };
        } catch (err) {
            console.error(err.message);
        };
    };

    return (
        <div className="Credentials">
            <h1>Login</h1>
            <div className="CredentialsForm">
                <input type='text' placeholder='Username' name='username' value={values.username} onChange={handleChange} />
                <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange} />
                <input type="submit" value="Login" onClick={handleSubmit} />
                <h1 style={{color:"red"}}>{message}</h1>
            </div>
        </div> 
    );
};

export default Login;