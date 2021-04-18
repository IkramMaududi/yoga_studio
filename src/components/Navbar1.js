import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';

function Navbar1() {

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
            {loggedIn ? (
                <ul className='nav-link'>
                    <li>
                        <Link style={navStyle} to='/'>Home</Link>
                    </li>
                    {/* profile */}
                    <li>
                        Profile
                        <ul>
                            <li>
                                <Link style={navStyle} to='/show-profile'>Show Profile</Link>
                            </li>
                            <li>
                                <Link style={navStyle} to='/edit-profile'>Edit Profile</Link>
                            </li> 
                        </ul>
                    </li>
                    {/* artwork */}
                    <li>
                        Artwork
                        <ul>
                            <li>
                                <Link style={navStyle} to='/upload-artwork'>Upload Artwork</Link>
                            </li>
                            <li>
                                <Link style={navStyle} to='/show-artwork'>Show Artwork</Link>
                            </li> 
                        </ul>
                    </li>
                    {/* game */}
                    <li>
                        Game
                        <ul>
                            <li>
                                <Link style={navStyle} to='/monster-killer'>Monster Killer</Link>
                            </li>
                            <li>
                                <Link style={navStyle} to='/jan-ken-pon'>Jan Ken Pon</Link>
                            </li> 
                        </ul>
                    </li>

                    <button onClick={logout}>log out</button>
                </ul>
            ) : (
                <ul className='nav-link'>
                    <li>
                        <Link style={navStyle} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to='/register'>Register</Link>
                    </li> 
                    <li>
                        <Link style={navStyle} to='/login'>Login</Link>
                    </li> 
                </ul>
            )}
        </nav>
    );
};

export default Navbar1;