import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    // logout functionality
    const logout = () => {
        localStorage.clear();
        window.location = '/';
    };    
    
    //toggle loggedIn value in local storage
    const [loggedIn, setLoggedIn] = useState(false);
    let condition = localStorage.getItem('loggedIn');
    useEffect( () => { 
        setLoggedIn(condition);
    }, [condition] );

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link style={navStyle} to='/'>Home</Link>
            {loggedIn === 'true' ? (
                <ul className='nav-link'>
                    <Link style={navStyle} to='/edit-profile'>
                        <li>Edit Profile</li>
                    </Link>
                    <Link style={navStyle} to='/show-profile'>
                        <li>Show Profile</li>
                    </Link>
                    <Link style={navStyle} to='/upload-artwork'>
                        <li>Upload Art Work</li>
                    </Link>
                    <Link style={navStyle} to='/show-artwork'>
                        <li>Show Art Work</li>
                    </Link>
                    <Link style={navStyle} to='/monsterkiller'>
                        <li>Monster Killer</li>
                    </Link>
                    <Link style={navStyle} to='/jankenpon'>
                        <li>Jan Ken Pon</li>
                    </Link>
                    <button onClick={logout}>log out</button>
                </ul>
            ) : (
                <ul className='nav-link'>
                    <Link style={navStyle} to='/about'>
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to='/register'>
                        <li>register</li>
                    </Link>
                    <Link style={navStyle} to='/login'>
                        <li>login</li>
                    </Link>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;