import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1 className="home-title">Welcome to Yoga Studio</h1>
                <p className="home-description">Discover balance, strength, and harmony at Yoga Studio.</p>
                <Link to="/showschedule">
                    <button className="home-cta">View Classes</button>
                </Link>
            </div>
        );
    }
}

export default Home;
