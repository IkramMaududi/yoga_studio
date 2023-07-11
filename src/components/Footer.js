import React from 'react';
import './Footer.css';

function Footer() {
    
    return (
        <div className='footer'>
            <div className='footer-menu'>
                <div class="footer-identity">
                    <h4><a href="/" class="nav-logo">Yoga Studio</a></h4>
                    <p class="footer-description">Step into serenity, where minds find balance and bodies align, at our peaceful yoga studio. Embrace tranquility as you journey within, breathing life into every pose, at our sacred haven of yoga and self-discovery. Discover the transformative power of breath and movement in our welcoming yoga sanctuary, where harmony unfolds with every pose.</p>
                </div>
                <div class="footer-feature">
                    {/* <div class="col">
                        <h4 class="footer-feature-title">About</h4>
                        <ul class="footer-feature-list">
                            <li><a href="/about">About Us</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h4 class="footer-feature-title">Schedule</h4>
                        <ul class="footer-feature-list">
                            <li><a href="/showschedule">Schedule</a></li>
                        </ul>
                    </div> */}
                    <div class="col">
                        <h4 class="footer-feature-title">Contact Us</h4>
                        <ul class="footer-feature-list">
                            <li>info@yogastudio.com</li>
                            <li>Yoga Studio Address No. xx</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <span>Copyright © SOT POD 1 2023</span>
            </div>
        </div>
    );
};

export default Footer;