import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    // logout functionality
    // let history = useHistory();
    const logout = () => {
        // console.log('try to logout');
        localStorage.clear();
        // forceUpdate();
        // history.push('/login');
        window.location = '/';
    };    
    
    //toggle loggedIn value in local storage
    const [loggedIn, setLoggedIn] = useState(false);
    let condition = localStorage.getItem('loggedIn');
    console.log(condition);
    useEffect( () => { 
        // console.log(condition);
        setLoggedIn(condition);
        // console.log(loggedIn);
    }, [condition] );

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link style={navStyle} to='/'>Home</Link>
            {loggedIn === 'true' ? (
                <ul className='nav-link'>
                    <Link style={navStyle} to='/profile'>
                        <li>profile</li>
                    </Link>
                    <Link style={navStyle} to='/game'>
                        <li>game</li>
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