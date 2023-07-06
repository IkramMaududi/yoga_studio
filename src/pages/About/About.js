import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Grid } from '@mui/material';

import './About.css';
import yogaImage from '../../assets/yoga-image.jpg';
import member1Image from '../../assets/member1.jpg';
import member2Image from '../../assets/member2.jpg';
import member3Image from '../../assets/member3.jpg';
import member4Image from '../../assets/member4.jpg';
import member5Image from '../../assets/member5.jpg';
import member6Image from '../../assets/member6.jpg';

class About extends React.Component {
  render() {
    const reasons = [
        { icon: <FaCheckCircle />, title: 'Experienced and Knowledgeable Instructors', description: 'Personalized guidance and expert instruction for your practice.' },
        { icon: <FaCheckCircle />, title: 'Welcoming and Inclusive Community', description: 'Belonging and acceptance in a diverse and supportive environment.' },
        { icon: <FaCheckCircle />, title: 'Variety of Classes and Workshops', description: 'Diverse options for all levels and interests.' }
    ];

    const teamMembers = [
        { name: 'Budi Santoso', role: 'Yoga Instructor', email: 'budi.santoso@yogastudio.com', image: member1Image },
        { name: 'Siti Rahayu', role: 'Yoga Teacher', email: 'siti.rahayu@yogastudio.com', image: member2Image },
        { name: 'Joko Susanto', role: 'Yoga Trainer', email: 'joko.susanto@yogastudio.com', image: member3Image },
        { name: 'Rini Wahyuni', role: 'Yoga Specialist', email: 'rini.wahyuni@yogastudio.com', image: member4Image },
        { name: 'Ahmad Pratama', role: 'Yoga Consultant', email: 'ahmad.pratama@yogastudio.com', image: member5Image },
        { name: 'Dewi Sari', role: 'Yoga Advisor', email: 'dewi.sari@yogastudio.com', image: member6Image },
      ];

    return (
      <div className="about-page">
        <section className="why-choose-us">
            <div className="reasons">
                <h2>Why Choose Us</h2>
                <div className="reason-list">
                    {reasons.map((reason, index) => (
                        <div className="reason" key={index}>
                        <div className="icon">{reason.icon}</div>
                        <div className="content">
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                        </div>
                    ))}
                </div>
          </div>
          <div className="yoga-image">
            <img src={yogaImage} alt="Yoga" />
          </div>
        </section>
        <section className="our-team">
          <h2>Our Team</h2>
            <Grid container spacing={2} className="team-members">
              {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className="member" key={index}>
                      <img src={member.image} alt={member.name} />
                      <div className="member-info">
                          <h3>{member.name}</h3>
                          <p>{member.role}</p>
                          <p>{member.email}</p>
                      </div>
                  </div>
              </Grid>
              ))}
            </Grid>
        </section>
      </div>
    );
  }
}

export default About;
