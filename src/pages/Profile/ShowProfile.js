import React, {useState, useEffect} from 'react';
import Axios from 'axios';
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
    //* states of data to be shown 
    const NULLVALUE = {
        fullname: '',
        age: '',
        email: '',
        phone: '',
        location: '',
        gender: '',
        artstyle: '',
        bio: ''
    };
    const [values, setValues] = useState(NULLVALUE);
    const [avatar, setAvatar] = useState(null);
    const [profileFilled, setProfileFilled] = useState(false);
    const [totalArtWork, setTotalArtWork] = useState(null);
    const [game, setGame] = useState(null);
    // const [gamePlay, setGamePlay] = useState({

    // });

    //TODO: add more things to fetch: game stats & total artwork
    //* check whether the user has ever filled the profile before
    useEffect( () => {
        const url = 'http://localhost:3001/user/profile';
        const username = localStorage.getItem('username');
        const getData = async () => {
            try {
                const response = await Axios.get(url, {
                    headers: {
                        username
                }});
                if (response.data.exist) {
                    console.log('a profile exists');
                    console.log(response.data.data);
                    // change the state of profile value
                    const {fullname, email, phone, age, location, artstyle, gender, bio, avatar} = response.data.data[0];
                    //TODO: check whether these 2 setState below work properly, especially the avatar
                    setValues({
                        fullname, age, email, phone, location, gender, artstyle, bio
                    });
                    setAvatar(avatar);
                    setProfileFilled(true);
                } else {
                    console.log('a profile does not exist');
                    setProfileFilled(false);
                };
            } catch (err) {
                console.error(err);
            };
        };
        getData();
    }, []);
    
    //* this is to obtain number of artwork
    useEffect( () => {
        const url = 'http://localhost:3001/user/artwork';
        const username = localStorage.getItem('username');
        const getData = async () => {
            await Axios
                    .get(url, { headers: {username} })
                    .then(res => {
                        console.log(res.data.data.length);
                        setTotalArtWork(res.data.data.length);
                    })
        };
        getData();
    }, []);

    //* this is to obtain total gameplay
    useEffect( () => {
        const url = 'http://localhost:3001/user/game';
        const username = localStorage.getItem('username');
        const getData = async () => {
            await Axios
                    .get(url, { headers: {username} })
                    .then(res => console.log(res.data))
        };
        getData();
    }, []);

    //* process received data
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return (
        <div className="profile-card">
            <div className="image-container">
                {avatar ? (
                    <img src={`data:image/png;base64, ${arrayBufferToBase64(avatar.data)}`} alt="profile pict" style={{width:'100%'}} /> 
                ) : (
                    <img src="/blank-profile.png" alt="blank-profile" style={{width:'100%'}} />
                )}
                <div className="title">
                    {values.fullname ? (
                        <h2>{values.fullname}</h2>
                    ) : (
                        <h2>John Doe</h2>
                    )}
                </div>
            </div>
            <div className="main-container">
                <p> <FontAwesomeIcon icon={faBriefcase}/>About Me </p>
                <p> <FontAwesomeIcon icon={faHome}/>Location: {values.location}</p>
                <p> <FontAwesomeIcon icon={faAt}/>Email: {values.email}</p>
                <p> <FontAwesomeIcon icon={faPhone}/>Phone: {values.phone}</p>
                {values.gender === 'male' ? (
                    <p> <FontAwesomeIcon icon={faMars}/>Gender: Male </p>
                ) : values.gender === 'female' ? (
                    <p> <FontAwesomeIcon icon={faVenus}/>Gender: Female </p>
                ) : (
                    <p> <FontAwesomeIcon icon={faQuestion}/>Gender: Unknown </p>
                )}
                <p> <FontAwesomeIcon icon={faInfo}/>Bio: {values.bio}</p>
                <p> <FontAwesomeIcon icon={faBirthdayCake}/>Age: {values.age}</p>
                <p> <FontAwesomeIcon icon={faAsterisk}/>Game Stats:</p>

                {/* <p>game: {game.exist}</p> */}
                {/* <p>JanKenPon: play {} win {} lose {}</p>
                <p>MonsterKiller: play {} win {} lose {}</p> */}
                <p> <FontAwesomeIcon icon={faArchive}/>Total Number of Arts: {totalArtWork}</p> 
            </div>
        </div>
    );
};

export default ShowProfile;