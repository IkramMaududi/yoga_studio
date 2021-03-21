import React, { useState } from 'react';

const MonsterHP = ({ done }) => {
    const [style, setStyle] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        };
        setStyle(newStyle);
    }, 500);
    return (
        <div id='progress'>
            <div id='progress-done' style={style}>
                {done}%
            </div>
        </div>
    );
};
const PlayerHP = ({ percentage }) => {
    const [style1, setStyle1] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${percentage}%`
        };
        setStyle1(newStyle);
    }, 500);
    return (
        <div id='progress'>
            <div id='progress-done' style={style1}>
                {percentage}%
            </div>
        </div>
    );
};

export { PlayerHP, MonsterHP };