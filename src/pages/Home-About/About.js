import React from 'react';
import './About.css';

function About() {
    return (
        <div id="top" className="fullSize">
            <div className="all"> 
                <div className="about-section-1">
                    <div className="inner-container">
                        <h1>Meet Our Teachers</h1>
                        <p className="text">
                            First and foremost, Yoga Studio teachers are passionate about yoga. They have all benefitted first-hand from regular yoga practices and are eager to share what they have learned. They come from around the world. We are committed to the on-going development and education of our teachers, and hold regular workshops and in-house training. 
                        </p>
                        <div className="skills">
                            <span>Teacher List</span>
                            <span>
                                Schedule
                                <Route path="/showschedule" component={Schedule} />
                            </span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 