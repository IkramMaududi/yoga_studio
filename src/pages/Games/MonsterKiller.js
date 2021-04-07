import React, { useState } from 'react';
// import Axios from 'axios';
import { MonsterHP, PlayerHP } from './MonsterKillerSupport';
import './MonsterKiller.css';

function KillMonster() {
    // choosen value
    let choosenMaxLife = 100;

    // hard-coded value
    const PLAYER_NORMAL_ATTACK_VALUE = 15;
    const PLAYER_STRONG_ATTACK_VALUE = 40;
    const MONSTER_ATTACK_VALUE = 35;
    const PLAYER_HEAL_VALUE = 25;
    const DECISION = ["It's a tie", "Computer Won", "Player Won"];

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



    // remove & add back bonus life
    const removeBonusLife = () => {
        setBonusLifeStyle({ display: 'none' });
        setHaveBonusLife(false);
    };
    const addBonusLife = () => {
        setBonusLifeStyle(initialStyle);
        setHaveBonusLife(false);
    };

    // handleReset game
    const handleReset = () => {
        setHealth({
            computer: choosenMaxLife,
            player: choosenMaxLife
        });
        addBonusLife();
    };


    const winCondition = (monsterHP, playerHP) => {
        if (monsterHP <= 0 && playerHP > 0) {
            alert(DECISION[2]);
            handleReset();
        } else if (monsterHP > 0 && playerHP <= 0) {
            if (haveBonusLife) {
                removeBonusLife();
                setHealth({
                    ...health,
                    player: PLAYER_HEAL_VALUE
                });

            } else {
                alert(DECISION[1]);
                handleReset();
            };
        } else if (monsterHP <= 0 && playerHP <= 0) {
            alert(DECISION[0]);
            handleReset();
        };
    };


    // different type of game actions
    const attackHandler = () => {
        // attack to computer & player respectively
        const damage2Monster = Math.random() * PLAYER_NORMAL_ATTACK_VALUE;
        const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
        setHealth({
            computer: Math.floor(health.computer - damage2Monster),
            player: Math.floor(health.player - damage2Player)
        });
    };
    const strongAttackHandler = () => {
        // attack to computer & player respectively
        const damage2Monster = Math.random() * PLAYER_STRONG_ATTACK_VALUE
        const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
        setHealth({
            computer: Math.floor(health.computer - damage2Monster),
            player: Math.floor(health.player - damage2Player)
        });
    };
    const healPlayerHandler = () => {
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

    // send data to backend to be saved to DB
    const handleSendData = () => {
    // const url = 'http://localhost:3001/user/game';
    // const username = localStorage.getItem('username');
    };

    winCondition(health.computer, health.player);

    return (
        <div className='play1'>
            <div className='health-levels'>
                <h2 id='health'>MONSTER HEALTH</h2>
                <MonsterHP done={health.computer} />
                <h2 id='health'>PLAYER HEALTH <span id="bonus-life" style={bonusLifeStyle}>1</span> </h2>
                <PlayerHP percentage={health.player} />
            </div>
            <div className="controls">
                <button className="monsterkiller" onClick={attackHandler}>ATTACK</button>
                <button className="monsterkiller" onClick={strongAttackHandler}>STRONG ATTACK</button>
                <button className="monsterkiller" onClick={healPlayerHandler}>HEAL</button>
            </div>
            { show ? 
                (
                    <div>
                        <p>Your final HP: {health.player}</p>
                        <p>Monster final HP: {health.computer}</p>
                        <h1>{message}</h1>
                        <button onClick={handleSendData}>Save Result</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                ) 
                : 
                null
            } 
        </div>
    );
};

export default KillMonster;