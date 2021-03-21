import React, { useState, useEffect } from 'react';
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
    const [gameLog, setGameLog] = useState([]);

    useEffect(() => {
        setGameLog([...gameLog, {
            monsterHP: monsterHealthBar,
            playerHP: playerHealthBar
        }])
    }, [monsterHealthBar, playerHealthBar]);

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
        setGameLog([]);
    };

    const winCondition = (monsterHP, playerHP) => {
        if (monsterHP <= 1 && playerHP > 0) {
            alert('You won!');
            reset();
        } else if (monsterHP > 0 && playerHP <= 0) {
            if (haveBonusLife) {
                removeBonusLife();
                setPlayerHealthBar(PLAYER_HEAL_VALUE);
            } else {
                alert('You lost!');
                reset();
            };
        } else if (monsterHP <= 0 && playerHP <= 0) {
            alert('You have a draw');
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

    console.log({ monsterHealthBar, playerHealthBar, haveBonusLife });
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
                <button className="monsterkiller" onClick={() => console.log(gameLog)}>SHOW LOG</button>
            </div>
        </div>
    );
};

export default KillMonster;