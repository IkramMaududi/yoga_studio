import React, {useState} from 'react';
import Axios from 'axios';
import './Credentials.css';

function SignIn() {
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
        <div id="top" className="fullSize">
            <div className="profile-form">
                <h1>Sign In</h1>
            </div>
            <div className="main">
                <h2 className="name">Username</h2>
                <input className="form-input" type='text' placeholder='Username' name='username' value={values.username} onChange={handleChange} />

                <h2 className="name">Password</h2>
                <input className="form-input" type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange} />

                <div id="box">
                    <button className="button1" type="Sign Up" onClick={handleSubmit}>Save</button>
                </div>

                <h1 style={{color:"red"}}>{message}</h1>
            </div>
        </div> 
    );
};

export default SignIn;