import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    //toggle loggedIn value in local storage
    const [loggedIn, setLoggedIn] = useState(false);
    let condition = localStorage.getItem('loggedIn');
    useEffect( () => { setLoggedIn(condition) }, [condition] );

    //logout function
    let history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push('/login');
    }; 


    return (
        <div className="Navbar">
            <a href="/">Home</a>
            {loggedIn ? (
                <>
                    <a href="/profile">Profile</a>
                    <button onClick={()=>logout}>log out</button>
                </>
            ) : (
                <>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </>
            ) }
        </div>
    )
};

export default Navbar;