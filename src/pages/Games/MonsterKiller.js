import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MonsterHP, PlayerHP } from './MonsterKillerSupport';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faSave, faFirstAid, faBug, faGavel, faHammer, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import './MonsterKiller.css';

library.add( faRedo, faSave, faFirstAid, faBug, faGavel, faHammer, faUserNinja );


function KillMonster() {
    // choosen value
    let choosenMaxLife = 100;

    // hard-coded value
    const PLAYER_NORMAL_ATTACK_VALUE = 15;
    const PLAYER_STRONG_ATTACK_VALUE = 40;
    const MONSTER_ATTACK_VALUE = 35;
    const PLAYER_HEAL_VALUE = 25;

    const initialStyle = {
        display: 'inline',
        fontWeight: 'bold',
        color: 'white',
        background: '#ff0062',
        border: '1px solid #ff0062',
        padding: '0.15rem 0.5rem',
        borderRadius: '10px',
        textAlign: 'center',
        margin: '0 0.5rem'
    };

    /*states of the game*/
    // health & bonus health state
    const [health, setHealth] = useState({
        computer: choosenMaxLife,
        player: choosenMaxLife
    });
    const [bonusLifeStyle, setBonusLifeStyle] = useState(initialStyle);
    const [haveBonusLife, setHaveBonusLife] = useState(true);

    // state for showing result
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [messageBack, setMessageBack] = useState('');

    // check win lose condition
    useEffect(() => {
        // Hard coded values for choices & final result of the game
        const DECISION = ["It's a tie", "Computer Won", "Player Won", ""];

        // game logic
        if (health.computer <= 0 && health.player > 0) {
            setMessage(DECISION[2]);
            setShow(true);
        } else if (health.computer > 0 && health.player <= 0) {
            if (haveBonusLife) {
                removeBonusLife();
                setHealth({
                    ...health,
                    player: PLAYER_HEAL_VALUE
                });
            } else {
                setMessage(DECISION[1]);
                setShow(true);
            };
        } else if (health.computer <= 0 && health.player <= 0) {
            setMessage(DECISION[0]);
            setShow(true);
        };
    }, [health.computer, health.player, health, haveBonusLife, message])


    // remove & add back bonus life
    const removeBonusLife = () => {
        setBonusLifeStyle({ display: 'none' });
        setHaveBonusLife(false);
    };
    const addBonusLife = () => {
        setBonusLifeStyle(initialStyle);
        setHaveBonusLife(false);
    };


    // reset game
    const handleReset = () => {
        setHealth({
            computer: choosenMaxLife,
            player: choosenMaxLife
        });
        addBonusLife();
        setMessage('');
        setShow(false);
        setMessageBack('');
    };


    // different type of game actions
    const attackHandler = () => {
        // action can't be performed if the game result is shown
        if (show) {
            return;
        } else {
            // attack to computer & player respectively
            const damage2Monster = Math.random() * PLAYER_NORMAL_ATTACK_VALUE;
            const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
            setHealth({
                computer: Math.floor(health.computer - damage2Monster),
                player: Math.floor(health.player - damage2Player)
            });
        };
    };
    const strongAttackHandler = () => {
        // action can't be performed if the game result is shown
        if (show) {
            return;
        } else {
            // attack to computer & player respectively
            const damage2Monster = Math.random() * PLAYER_STRONG_ATTACK_VALUE
            const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
            setHealth({
                computer: Math.floor(health.computer - damage2Monster),
                player: Math.floor(health.player - damage2Player)
            });
        };
    };
    const healPlayerHandler = () => {
        // action can't be performed if the game result is shown
        if (show) {
            return;
        } else {
            // player can't use extra health if health is still high & when health is being added, player can't attack
            if (choosenMaxLife - health.player < PLAYER_HEAL_VALUE) {
                alert("You can't use extra health yet!");
            } else {
                removeBonusLife();
                const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
                setHealth({
                    ...health,
                    player: Math.floor(health.player + PLAYER_HEAL_VALUE - damage2Player)
                });
            };
        };
    };

    // send data to backend to be saved to DB
    const handleSendData = async (e) => {
        // initiate the data to be sent & its destination
        // const url = 'http://localhost:3001/user/game';
        const url = 'https://cool-art-social-media.herokuapp.com/user/game';
        const username = localStorage.getItem('username');
        const result = {
            result: message,
            specific: {
                playerHP: health.player,
                computerHP: health.computer
            }
        };

        // perform sending data
        e.preventDefault();
        try {
            const response  = await Axios.post(url, result, { 
                headers: { 
                    username, 
                    game: 'Monster-Killer' 
                } 
            });
            setMessageBack(response.data.message);
        } catch (err) {
            console.log(err);
        };};


    return (
        <div id='top' className='fullSize'>
            <div className='health-levels'>
                <h2 id='health'> 
                    <FontAwesomeIcon icon={faBug} className="gap"/>MONSTER HEALTH 
                </h2>
                <MonsterHP done={health.computer} />

                <h2 id='health'> 
                    <FontAwesomeIcon icon={faUserNinja} className="gap"/>PLAYER HEALTH 
                    <span id="bonus-life" style={bonusLifeStyle}>1</span> 
                </h2>
                <PlayerHP percentage={health.player} />
            </div>
            <div className="controls">
                <button className="monsterkiller" onClick={attackHandler}> 
                    <FontAwesomeIcon icon={faGavel} className="gap"/>ATTACK 
                </button>
                <button className="monsterkiller" onClick={strongAttackHandler}> 
                    <FontAwesomeIcon icon={faHammer} className="gap"/>STRONG ATTACK 
                </button>
                <button className="monsterkiller" onClick={healPlayerHandler}> 
                    <FontAwesomeIcon icon={faFirstAid} className="gap"/>HEAL 
                </button>
            </div>
            { show ? 
                (
                    <div className='controls'>
                        <p>Your final health: {health.player}</p>
                        <p>Monster final health: {health.computer}</p>
                        <h1 style={{color: 'red'}}>{message}</h1>
                        <button className='monsterkiller' onClick={handleSendData}> 
                            <FontAwesomeIcon icon={faSave} className="gap"/>Save Result 
                        </button>
                        <button className='monsterkiller' onClick={handleReset}> 
                            <FontAwesomeIcon icon={faRedo} className="gap"/>Reset 
                        </button>
                        <h1 id="msg">{messageBack}</h1>
                    </div>
                ) 
                : 
                null
            } 
        </div>
    );
};

export default KillMonster;