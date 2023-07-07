import React from 'react';
import './Footer.css';

function Footer() {
    
    return (
        <div className='footer'>
            <div className='footer-menu'>
                <div class="footer-identity">
                    <h4><a href="/" class="nav-logo">Yoga Studio</a></h4>
                    <p class="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="footer-feature">
                    <div class="col">
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
                    </div>
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