import React, {useState} from 'react';
import Axios from 'axios';
import './Credentials.css';

function SignUp() {
    // data to be sent & its destination
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    // const url = 'http://localhost:3001/user/register';
    const url = 'https://cool-art-social-media.herokuapp.com/user/register';

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

        // username validation
        if (!values.username.trim()) return setMessage('Username is required');

        // password validation
        if (!values.password) {
            return setMessage('Password is required');
        } else if (values.password.length < 6) {
            return setMessage('Password needs to be 6 characters or more');
        };

        // // send data to backend API
        // try {
        //     const response = await Axios.post( url, values );
        //     // console.log(response.data);
        //     if(response.data.registered) {
        //         setMessage(response.data.message);
        //     } else {
        //         setMessage('Registration failed');
        //     };
        //     window.location = '/signin';
        // } catch (err) {
        //     console.log(err);
        // };

             window.location = '/signin';

    };

    return (
        <div id="top" className="fullSize">
            <div className="CredentialsForm">
                <h1>Cool Art</h1>
                <h2>Sign Up</h2>
                <input type='text' placeholder='Username' name='username' value={values.username} onChange={handleChange} />
                <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange} />
                <input type="submit" value="Sign Up" onClick={handleSubmit} />
                <h1 id="msg">{message}</h1>
            </div>
        </div> 
    );
};

export default SignUp;