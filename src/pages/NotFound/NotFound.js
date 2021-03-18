import React from 'react';
import './NotFound.css';

function NotFound() {
    const GoBackHome = () => {
        window.location = '/';
    };

    return (
        <div className="upper">
            <div className="lower">
                <h2>Oops! Page not found!</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <button onClick={GoBackHome}>Go back home</button>
            </div>
        </div>
    );
};

export default NotFound;