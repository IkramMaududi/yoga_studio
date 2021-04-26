import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHome, faGamepad, faHandRock, faHandScissors, faHandPaper, 
    faBug, faExchangeAlt, faUserNinja, faImages, faIdCard, faUser, 
    faArchive, faUserEdit, faUpload, faSignInAlt, faSignOutAlt, faInfoCircle, faUserPlus 
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


library.add( 
    faHome, faGamepad, faHandRock, faHandScissors, faHandPaper, 
    faBug, faExchangeAlt, faUserNinja, faImages, faIdCard, faUser, 
    faArchive, faUserEdit, faUpload, faSignInAlt, faSignOutAlt, faInfoCircle, faUserPlus 
);

function Navbar() {
    // logout functionality
    const signOut = () => {
        localStorage.clear();
        window.location = '/';
    };    
    
    //toggle loggedIn value in local storage
    const [signedIn, setSignedIn] = useState(false);
    let condition = localStorage.getItem('loggedIn');
    useEffect( () => { 
        setSignedIn(condition);
    }, [condition] );

    return (
        <nav className="menu-bar">
            {signedIn ? (
                <ul>
                    <li className="active">
                        <Link className="Link" to='/'> 
                            <FontAwesomeIcon icon={faHome}/>Home 
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser}/>Profile
                        <div className="sub-menu-1">
                            <ul>
                                <li>
                                    <Link className="Link" to='/showprofile'> 
                                        <FontAwesomeIcon icon={faIdCard}/>Show Profile 
                                    </Link>
                                </li>
                                <li>
                                    <Link className="Link" to='/editprofile'> 
                                        <FontAwesomeIcon icon={faUserEdit}/>Edit Profile 
                                    </Link>
                                </li> 
                            </ul> 
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faArchive}/>Artwork
                        <div className="sub-menu-1">
                            <ul>
                                <li>
                                    <Link className="Link" to='/uploadartwork'>
                                        <FontAwesomeIcon icon={faUpload}/>Upload Artwork
                                    </Link>
                                </li>
                                <li>
                                    <Link className="Link" to='/showartwork'> 
                                        <FontAwesomeIcon icon={faImages}/>Show Artwork 
                                    </Link>
                                </li> 
                            </ul>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGamepad}/>Game
                        <div className="sub-menu-1">
                            <ul>
                                <li>
                                    <Link className="Link" to='/monsterkiller'>
                                        <FontAwesomeIcon icon={faBug}/>
                                        <FontAwesomeIcon icon={faExchangeAlt}/>
                                        <FontAwesomeIcon icon={faUserNinja}/>
                                        Monster Killer
                                    </Link>
                                </li>
                                <li>
                                    <Link className="Link" to='/jankenpon'> 
                                        <FontAwesomeIcon icon={faHandRock}/>
                                        <FontAwesomeIcon icon={faHandPaper}/>
                                        <FontAwesomeIcon icon={faHandScissors}/>
                                        Jan Ken Pon
                                    </Link>
                                </li> 
                            </ul>
                        </div>
                    </li>
                    <button className="LogOut" onClick={signOut}>
                       <FontAwesomeIcon icon={faSignOutAlt}/>Sign Out
                    </button>
                    
                </ul>
            ) : (
                <ul> 
                    <li className="active">
                        <Link className="Link" to='/'> 
                            <FontAwesomeIcon icon={faHome}/>Home 
                        </Link>
                    </li>
                    <li>
                        <Link className="Link" to='/about'>
                            <FontAwesomeIcon icon={faInfoCircle}/>About
                        </Link>
                    </li>
                    <li>
                        <Link className="Link" to='/signup'>
                            <FontAwesomeIcon icon={faUserPlus}/>Sign Up
                        </Link>
                    </li> 
                    <li>
                        <Link className="Link" to='/signin'>
                            <FontAwesomeIcon icon={faSignInAlt}/>Sign In
                        </Link>
                    </li> 
                </ul>
            )}
        </nav>
    );
};

export default Navbar;