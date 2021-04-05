import React, { useState } from 'react';
// import Axios from 'axios';
import { MonsterHP, PlayerHP } from './MonsterKillerSupport';
import './MonsterKiller.css';

function KillMonster() {
    // set the url to send the data
    // const url = 'http://localhost:3001/user/game';
    // const username = localStorage.getItem('username');

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

    // main variables that decide gameplay
    const [monsterHealthBar, setMonsterHealthBar] = useState(choosenMaxLife);
    const [playerHealthBar, setPlayerHealthBar] = useState(choosenMaxLife);
    const [extraHealthStyle, setExtraHealthStyle] = useState(initialStyle);
    const [haveBonusLife, setHaveBonusLife] = useState(true);

    const removeBonusLife = () => {
        setExtraHealthStyle({
            display: 'none'
        });
        setHaveBonusLife(false);
    };
    const addBonusLife = () => {
        setExtraHealthStyle(initialStyle);
        setHaveBonusLife(false);
    };

    const reset = () => {
        setMonsterHealthBar(choosenMaxLife);
        setPlayerHealthBar(choosenMaxLife);
        addBonusLife();
    };

    const winCondition = (monsterHP, playerHP) => {
        if (monsterHP <= 0 && playerHP > 0) {
            /* const result = {
                result: DECISION[2],
                specific: {
                    player: playerHealthBar,
                    computer: monsterHealthBar
                }
            };
            Axios.post(url, result) 
            */
            alert(DECISION[2]);
            reset();
        } else if (monsterHP > 0 && playerHP <= 0) {
            if (haveBonusLife) {
                removeBonusLife();
                setPlayerHealthBar(PLAYER_HEAL_VALUE);
            } else {
                /* const result = {
                    result: DECISION[1],
                    specific: {
                        player: playerHealthBar,
                        computer: monsterHealthBar
                    }
                };
                Axios.post(url, result) 
                */
                alert(DECISION[1]);
                reset();
            };
        } else if (monsterHP <= 0 && playerHP <= 0) {
            /* const result = {
                result: DECISION[0],
                specific: {
                    player: playerHealthBar,
                    computer: monsterHealthBar
                }
            };
            Axios.post(url, result) 
            */
            alert(DECISION[0]);
            reset();
        };
    };

    const attackHandler = () => {
        /*attack from player*/
        const damage2Monster = Math.random() * PLAYER_NORMAL_ATTACK_VALUE;
        setMonsterHealthBar(Math.floor(monsterHealthBar - damage2Monster));

        /*attack from monster*/
        const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
        setPlayerHealthBar(Math.floor(playerHealthBar - damage2Player));
    };

    const strongAttackHandler = () => {
        /*attack from player*/
        const damage2Monster = Math.random() * PLAYER_STRONG_ATTACK_VALUE
        setMonsterHealthBar(Math.floor(monsterHealthBar - damage2Monster));

        /*attack from monster*/
        const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
        setPlayerHealthBar(Math.floor(playerHealthBar - damage2Player));
    };

    const healPlayerHandler = () => {
        if (choosenMaxLife - playerHealthBar < PLAYER_HEAL_VALUE) {
            alert("You can't use extra health yet!");
        } else {
            removeBonusLife();
            const damage2Player = Math.random() * MONSTER_ATTACK_VALUE;
            setPlayerHealthBar(Math.floor(playerHealthBar + PLAYER_HEAL_VALUE - damage2Player));
        };
    };

    winCondition(monsterHealthBar, playerHealthBar);

    return (
        <div className='play1'>
            <div className='health-levels'>
                <h2 id='health'>MONSTER HEALTH</h2>
                <MonsterHP done={monsterHealthBar} />
                <h2 id='health'>PLAYER HEALTH <span id="bonus-life" style={extraHealthStyle}>1</span> </h2>
                <PlayerHP percentage={playerHealthBar} />
            </div>
            <div className="controls">
                <button className="monsterkiller" onClick={attackHandler}>ATTACK</button>
                <button className="monsterkiller" onClick={strongAttackHandler}>STRONG ATTACK</button>
                <button className="monsterkiller" onClick={healPlayerHandler}>HEAL</button>
            </div>
        </div>
    );
};

export default KillMonster;