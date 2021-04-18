import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar2() {

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

    // const navStyle = {
    //     color: 'white'
    // };

    return (
        // <div className="menu-bar">
        <nav className="menu-bar">
            {loggedIn ? (
                <ul>
                    <li className="active">
                        <Link className="Link" to='/'>Home</Link>
                    </li>
                    {/* profile */}
                    <li>
                        Profile
                        <div className="sub-menu-1">
                            <ul>
                                <li>
                                    <Link className="Link" to='/show-profile'>Show Profile</Link>
                                </li>
                                <li>
                                    <Link className="Link" to='/edit-profile'>Edit Profile</Link>
                                </li> 
                            </ul> 
                        </div>
                    </li>
                    {/* artwork */}
                    <li>
                        Artwork
                        <div className="sub-menu-1">
                            <ul>
                                <li>
                                    <Link className="Link" to='/upload-artwork'>Upload Artwork</Link>
                                </li>
                                <li>
                                    <Link className="Link" to='/show-artwork'>Show Artwork</Link>
                                </li> 
                            </ul>
                        </div>
                    </li>
                    {/* game */}
                    <li>
                        Game
                        <div className="sub-menu-1">
                            <ul>
                                <li>
                                    <Link className="Link" to='/monster-killer'>Monster Killer</Link>
                                </li>
                                <li>
                                    <Link className="Link" to='/jan-ken-pon'>Jan Ken Pon</Link>
                                </li> 
                            </ul>
                        </div>
                    </li>
                    {/* <li>
                        <button onClick={logout}>log out</button>
                    </li> */}
                    <button className="LogOut" onClick={logout}>log out</button>
                    
                </ul>
            ) : (
                <ul> 
                    <li className="active">
                        <Link className="Link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="Link" to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="Link" to='/register'>Register</Link>
                    </li> 
                    <li>
                        <Link className="Link" to='/login'>Login</Link>
                    </li> 
                </ul>
            )}
        </nav>
        // </div>
    );
};

export default Navbar2;