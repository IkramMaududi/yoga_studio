import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHome, faGamepad, faHandRock, faHandScissors, faHandPaper, 
    faBug, faExchangeAlt, faUserNinja, faImages, faIdCard, faUser, faPhoneAlt,
    faArchive, faUserEdit, faUpload, faSignInAlt, faSignOutAlt, faInfoCircle, faUserPlus,
    faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

import logoImage from '../assets/logo.png';

library.add( 
    faHome, faGamepad, faHandRock, faHandScissors, faHandPaper, 
    faBug, faExchangeAlt, faUserNinja, faImages, faIdCard, faUser, faPhoneAlt,
    faArchive, faUserEdit, faUpload, faSignInAlt, faSignOutAlt, faInfoCircle, faUserPlus,
    faCaretDown
);

function Navbar() {
    // logout functionality
    const signOut = () => {
        localStorage.clear();
        window.location = '/';
    };    

    // get url location
    const location = useLocation()
    
    //toggle loggedIn value in local storage
    const [signedIn, setSignedIn] = useState(false);
    let condition = localStorage.getItem('loggedIn');
    useEffect( () => { 
        setSignedIn(condition);
    }, [condition] );

    return (
        <div className='nav-bar'>
            <nav className="menu-bar">
                <div className='banner' onClick={() => {window.location = '/'}}>
                    <img className='logo-image' src={logoImage} alt="logoImage" />
                    <div>Yoga Studio</div>
                </div>
                {signedIn ? (
                    <ul>
                        <li className={location.pathname === '/' ? "active" : ""}>
                            <Link className="Link" to='/'> 
                                <FontAwesomeIcon icon={faHome} className="gap"/>Home 
                            </Link>
                        </li>
                        <li className={location.pathname === '/about' ? "active" : ""}>
                            <Link className="Link" to='/about'>
                                <FontAwesomeIcon icon={faInfoCircle} className="gap"/>About
                            </Link>
                        </li>
                        {/* <li className={['/showprofile', '/editprofile'].includes(location.pathname) ? "active" : ""}>
                            <FontAwesomeIcon icon={faUser} className="gap"/>Profile
                            <div className="sub-menu-1">
                                <ul>
                                    <li className={location.pathname === '/showprofile' ? "active" : ""}>
                                        <Link className="Link" to='/showprofile'> 
                                            <FontAwesomeIcon icon={faIdCard} className="gap"/>Show Profile 
                                        </Link>
                                    </li>
                                    <li className={location.pathname === '/editprofile' ? "active" : ""}>
                                        <Link className="Link" to='/editprofile'> 
                                            <FontAwesomeIcon icon={faUserEdit} className="gap"/>Edit Profile 
                                        </Link>
                                    </li> 
                                </ul> 
                            </div>
                        </li> */}
                        <li className={['/updateschedule', '/showschedule'].includes(location.pathname) ? "active" : ""}>
                            <FontAwesomeIcon icon={faArchive} className="gap"/>Schedule
                            <FontAwesomeIcon icon={faCaretDown} className="gap-left"/>
                            <div className="sub-menu-1">
                                <ul>
                                    <li className={location.pathname === '/updateschedule' ? "active" : ""}>
                                        <Link className="Link" to='/updateschedule'>
                                            <FontAwesomeIcon icon={faUpload} className="gap"/>Book a Class
                                        </Link>
                                    </li>
                                    <li className={location.pathname === '/showschedule' ? "active" : ""}>
                                        <Link className="Link" to='/showschedule'> 
                                            <FontAwesomeIcon icon={faImages} className="gap"/>View Classes
                                        </Link>
                                    </li> 
                                </ul>
                            </div>
                        </li>
                        {/* <li className={['/monsterkiller', '/jankenpon'].includes(location.pathname) ? "active" : ""}>
                            <FontAwesomeIcon icon={faGamepad} className="gap"/>Game
                            <div className="sub-menu-1">
                                <ul>
                                    <li className={location.pathname === '/monsterkiller' ? "active" : ""}>
                                        <Link className="Link" to='/monsterkiller'>
                                            <FontAwesomeIcon icon={faBug}/>
                                            <FontAwesomeIcon icon={faExchangeAlt}/>
                                            <FontAwesomeIcon icon={faUserNinja} className="gap"/>
                                            Monster Killer
                                        </Link>
                                    </li>
                                    <li className={location.pathname === '/jankenpon' ? "active" : ""}>
                                        <Link className="Link" to='/jankenpon'> 
                                            <FontAwesomeIcon icon={faHandRock}/>
                                            <FontAwesomeIcon icon={faHandPaper}/>
                                            <FontAwesomeIcon icon={faHandScissors} className="gap"/>
                                            Jan Ken Pon
                                        </Link>
                                    </li> 
                                </ul>
                            </div>
                        </li> */}
                        <li>
                            <div onClick={signOut}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="gap"/>Sign Out
                            </div>
                        </li>
                        
                    </ul>
                ) : (
                    <ul> 
                        <li className={location.pathname === '/' ? "active" : ""}>
                            <Link className="Link" to='/'> 
                                <FontAwesomeIcon icon={faHome} className="gap"/>Home 
                            </Link>
                        </li>
                        <li className={location.pathname === '/about' ? "active" : ""}>
                            <Link className="Link" to='/about'>
                                <FontAwesomeIcon icon={faInfoCircle} className="gap"/>About
                            </Link>
                        </li>
                        {/* <li className={location.pathname === '/contacus' ? "active" : ""}>
                            <Link className="Link" to='/contactus'>
                                <FontAwesomeIcon icon={faPhoneAlt} className="gap"/>Contact Us
                            </Link>
                        </li> */}
                        <li className={location.pathname === '/showschedule' ? "active" : ""}>
                            <Link className="Link" to='/showschedule'> 
                                <FontAwesomeIcon icon={faImages} className="gap"/>View Classes
                            </Link>
                        </li> 
                        {/* <li>
                            <Link className="Link" to='/signup'>
                                <FontAwesomeIcon icon={faUserPlus} className="gap"/>
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link className="Link" to='/signin'>
                                <FontAwesomeIcon icon={faSignInAlt} className="gap"/>
                                Sign In
                            </Link>
                        </li> */}
                        <li className={['/signup', '/signin'].includes(location.pathname) ? "active" : ""}>
                            <FontAwesomeIcon icon={faUser} className="gap"/>
                            SignUp / SignIn
                            <FontAwesomeIcon icon={faCaretDown} className="gap-left"/>
                            <div className="sub-menu-1">
                                <ul>
                                    <li className={location.pathname === '/signup' ? "active" : ""}>
                                        <Link className="Link" to='/signup'>
                                            <FontAwesomeIcon icon={faUserPlus} className="gap"/>
                                            Sign Up
                                        </Link>
                                    </li>
                                    <li className={location.pathname === '/signin' ? "active" : ""}>
                                        <Link className="Link" to='/signin'>
                                            <FontAwesomeIcon icon={faSignInAlt} className="gap"/>
                                            Sign In
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Navbar;