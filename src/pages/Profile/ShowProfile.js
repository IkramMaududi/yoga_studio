import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faAsterisk, faUser, faQuestion, faArchive, faMars, faVenus, 
    faInfo, faBirthdayCake, faBriefcase, faHome, faAt, faPhone, faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import './ShowProfile.css';

library.add(
    faAsterisk, faUser, faQuestion, faArchive, faMars, faVenus, 
    faInfo, faBirthdayCake, faBriefcase, faHome, faAt, faPhone, faMapMarkerAlt,
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
    const [totalArtWork, setTotalArtWork] = useState(null);
    const [game, setGame] = useState(null);

    useEffect( () => {
        const username = localStorage.getItem('username');

        // const urlProfile = 'http://localhost:3001/user/profile';
        // const urlArtWork = 'http://localhost:3001/user/artwork';
        // const urlGame = 'http://localhost:3001/user/game';

        const urlProfile = 'https://cool-art-social-media.herokuapp.com/user/profile';
        const urlArtWork = 'https://cool-art-social-media.herokuapp.com/user/artwork';
        const urlGame = 'https://cool-art-social-media.herokuapp.com/user/game';

        const getDataProfile = async () => {
            try {
                const responseProfile = await Axios.get(urlProfile, { headers: {username} });
                if (responseProfile.data.exist) {
                    console.log('a profile exists');
                    console.log(responseProfile.data.data);
                    // change the state of profile value
                    const {fullname, email, phone, age, location, artstyle, gender, bio, avatar} = responseProfile.data.data[0];
                    setValues({
                        fullname, age, email, phone, location, gender, artstyle, bio
                    });
                    setAvatar(avatar);
                } else {
                    console.log('a profile does not exist');
                };
            } catch (err) {
                // console.error(err);
                console.log(err);
            };
        };
        const getDataArtWork = async () => {
            await Axios
                    .get(urlArtWork, { headers: {username} })
                    .then(res => {
                        console.log(res.data.data.length);
                        setTotalArtWork(res.data.data.length);
                    })
        };
        const getDataGame = async () => {
            try {
                const responseGame = await Axios.get(urlGame, { headers: {username} });
                if (responseGame.data.exist) {
                    console.log(' game data exists');
                    console.log(responseGame.data.data);
                    
                    let JanKenPon = 0, winJKP = 0, loseJKP = 0, drawJKP = 0, 
                        MonsterKiller = 0, winMK = 0, loseMK = 0, drawMK = 0;

                    responseGame.data.data.forEach((item) => {
                        const DECISION = ["It's a tie", "Computer Won", "Player Won", ""];
                        if (item.game === 'Jan-Ken-Pon') {
                            JanKenPon += 1;
                            if (item.result.result === DECISION[0]) {
                                drawJKP += 1; 
                            } else if (item.result.result === DECISION[1]) {
                                loseJKP += 1;
                            } else if (item.result.result === DECISION[2]) {
                                winJKP += 1;
                            }; 
                        } else if (item.game === 'Monster-Killer') {
                            MonsterKiller += 1;
                            if (item.result.result === DECISION[0]) {
                                drawMK += 1; 
                            } else if (item.result.result === DECISION[1]) {
                                loseMK += 1;
                            } else if (item.result.result === DECISION[2]) {
                                winMK += 1;
                            };                         
                        }; 
                    });
                    const fetchedData = {
                        JKP : {
                            play: JanKenPon,
                            win: winJKP,
                            lose: loseJKP,
                            draw: drawJKP
                        },
                        MK : {
                            play: MonsterKiller,
                            win: winMK,
                            lose: loseMK,
                            draw: drawMK
                        }
                    };
                    console.log(fetchedData);
                    setGame(fetchedData);
                } else {
                    console.log("game data doesn't exist");
                };
            } catch (err) {
                // console.error(err);
                console.log(err);
            };
        };

        getDataProfile();
        getDataArtWork(); 
        getDataGame();
    }, []);

    //* process received data
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return (
        <div id="top">
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
                    <p> <FontAwesomeIcon icon={faBriefcase} className="gap"/>About Me </p>
                    <p> <FontAwesomeIcon icon={faMapMarkerAlt} className="gap"/>Location: {values.location}</p>
                    <p> <FontAwesomeIcon icon={faAt} className="gap"/>Email: {values.email}</p>
                    <p> <FontAwesomeIcon icon={faPhone} className="gap"/>Phone: {values.phone}</p>
                    {values.gender === 'male' ? (
                        <p> <FontAwesomeIcon icon={faMars} className="gap"/>Gender: Male </p>
                    ) : values.gender === 'female' ? (
                        <p> <FontAwesomeIcon icon={faVenus} className="gap"/>Gender: Female </p>
                    ) : (
                        <p> <FontAwesomeIcon icon={faQuestion} className="gap"/>Gender: Unknown </p>
                    )}
                    <p> <FontAwesomeIcon icon={faInfo} className="gap"/>Bio: {values.bio}</p>
                    <p> <FontAwesomeIcon icon={faBirthdayCake} className="gap"/>Age: {values.age}</p>

                    <p> <FontAwesomeIcon icon={faArchive} className="gap"/>Total Number of Arts: {totalArtWork}</p> 
                    <p> <FontAwesomeIcon icon={faAsterisk} className="gap"/>Game Stats:</p>
                    
                    {game? (
                        <>
                            <p>JanKenPon: play {game.JKP.play}, win {game.JKP.win}, lose {game.JKP.lose}, draw {game.JKP.draw}</p>
                            <p>Monster Killer: play {game.MK.play}, win {game.MK.win}, lose {game.MK.lose}, draw {game.MK.draw}</p>  
                        </>
                    ) : (
                        <>
                            <p>JanKenPon: play 0, win 0, lose 0, draw 0</p>
                            <p>Monster Killer: play 0, win 0, lose 0, draw 0</p>
                        </>
                    )}
                

                </div>
            </div>
        </div>
    );
};

export default ShowProfile;