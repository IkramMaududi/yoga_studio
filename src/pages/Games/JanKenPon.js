import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faSave, faPlay, faHandRock, faHandScissors, faHandPaper } from '@fortawesome/free-solid-svg-icons';

library.add( faRedo, faSave, faPlay, faHandRock, faHandScissors, faHandPaper );

function JanKenPon() {
    // hard coded values
    const CHOICES = ['rock', 'paper', 'scissors'];

    // states of the game
    const [values, setValues] = useState({
        player: '',
        computer: ''
    });
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [messageBack, setMessageBack] = useState('');

    // check win condition
    useEffect(() => {
        // Hard coded values for choices & final result of the game
        const DECISION = ["It's a tie", "Computer Won", "Player Won", ""];

        // game logic
        if (values.computer === '' || values.player === '') { 
            setMessage(DECISION[3]);
            setShow(false);
        } else if (values.computer === values.player && values.computer !== '' && values.player !== '' && message === "") {
            setMessage(DECISION[0]);
            setShow(true);
        } else {
            if ( 
                (values.computer === 'rock' && values.player === 'scissors') || 
                (values.computer === 'paper' && values.player === 'rock') || 
                (values.computer === 'scissors' && values.player === 'paper')
               ) {
                setMessage(DECISION[1]);
                setShow(true);
            } else if (
                (values.player === 'rock' && values.computer === 'scissors') || 
                (values.player === 'paper' && values.computer === 'rock') || 
                (values.player === 'scissors' && values.computer === 'paper')
            ) {
                setMessage(DECISION[2]);
                setShow(true);
            };
        }; 
    }, [values.computer, values.player, message]);


    // player can only make a choice when the state of the game is new
    const playerChooseRock = () => {
        if (values.computer) return;
        setValues({...values, player: 'rock'});
    };
    const playerChoosePaper = () => {
        if (values.computer) return;
        setValues({...values, player: 'paper'});
    };
    const playerChooseScissors = () => {
        if (values.computer) return;
        setValues({...values, player: 'scissors'});
    }; 

    // game play
    const play = async () => {
        // can't perform if player hasn't made a choice
        if ( (!values.player) ) return; 
        if (show) return;

        // computer make a choice
        const computerChoiceIndex = Math.floor(Math.random() * CHOICES.length);
        setValues({...values, computer: CHOICES[computerChoiceIndex]});
    };

    // reset game
    const handleReset = () => {
        setValues({
            player: '',
            computer: ''
        });
        setMessage("");
        setShow(false);
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
                player: values.player,
                computer: values.computer
            }
        };

        // perform sending data
        e.preventDefault();
        try {
            const response  = await Axios.post(url, result, { 
                headers: { 
                    username, 
                    game: 'Jan-Ken-Pon' 
                } 
            });
            setMessageBack(response.data.message);
            // console.log(response)
        } catch (err) {
            // console.error(err.message);
            console.log(err);
        };
    };
        
    return (
        <div id='top' className='fullSize'>
            <div className='controls'>
                <button className='monsterkiller' onClick={playerChooseRock}> 
                    <FontAwesomeIcon icon={faHandRock} className="gap"/>rock 
                </button>
                <button className='monsterkiller' onClick={playerChoosePaper}>  
                    <FontAwesomeIcon icon={faHandPaper} className="gap"/>paper 
                </button>
                <button className='monsterkiller' onClick={playerChooseScissors}> 
                    <FontAwesomeIcon icon={faHandScissors} className="gap"/>scissors 
                </button>
                <button className='monsterkiller' onClick={play}> 
                    <FontAwesomeIcon icon={faPlay} className="gap"/>play 
                </button>
            </div>

            { show ? 
                (
                    <div className='controls'>
                        <p>your choice: {values.player}</p>
                        <p>computer's choice: {values.computer}</p>
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

export default JanKenPon;