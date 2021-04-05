import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
         faAsterisk, faUser, faQuestion, faArchive,
         faMars, faVenus, faInfo, faBirthdayCake, 
         faBriefcase, faHome, faAt, faPhone,
       } from '@fortawesome/free-solid-svg-icons';
import './ShowProfile.css';

library.add(
    faAsterisk, faUser, faQuestion, faArchive,
    faMars, faVenus, faInfo, faBirthdayCake, 
    faBriefcase, faHome, faAt, faPhone,
);

function ShowProfile() {
    return (
        <div className="profile-card">
            <div className="image-container">
                <img src="/bird.jpg" alt="bird" style={{width:'100%'}} />
                <div className="title">
                    <h2>John Doe</h2>
                </div>
            </div>
            <div className="main-container">
                <p> <FontAwesomeIcon icon={faBriefcase}/>About Me </p>
                <p> <FontAwesomeIcon icon={faHome}/>Jakarta, Indonesia </p>
                <p> <FontAwesomeIcon icon={faAt}/>testing@test.com </p>
                <p> <FontAwesomeIcon icon={faPhone}/>134187026340 </p>
                <p> <FontAwesomeIcon icon={faMars}/>Male </p>
                <p> <FontAwesomeIcon icon={faVenus}/>Female </p>
                <p> <FontAwesomeIcon icon={faQuestion}/>Other </p>
                <p> <FontAwesomeIcon icon={faInfo}/>Bio </p>
                <p> <FontAwesomeIcon icon={faBirthdayCake}/>birthday </p>
                <p> <FontAwesomeIcon icon={faAsterisk}/>stats </p>

                <p>JanKenPon</p>
                {/* insert monster icon below */}
                <p>Monster Killer</p>
                <p> <FontAwesomeIcon icon={faArchive}/>Total Art</p>
            </div>
        </div>
    );
};

export default ShowProfile;