import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Axios from 'axios';
import './Schedule.css';

const Schedule = () => {

  const url_school = 'https://r4h536i023.execute-api.us-east-1.amazonaws.com/development/school';
  const url_users = 'https://r4h536i023.execute-api.us-east-1.amazonaws.com/development/users';

  
  //check loggedIn value in local storage
  const isLoggedIn = localStorage.getItem('loggedIn');

  const getSchedule = async () => {
    try {
      const schoolSchedule = await Axios.get(url_school);
      console.log(schoolSchedule.data);
      const usersSchedule = await Axios.get(url_users);
      console.log(usersSchedule.data);

      // Set the retrieved schedules to the state
      setSchedules([...schoolSchedule.data, ...usersSchedule.data]);
    } catch (error) {
      console.log(error);
    };
  };


  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    getSchedule();
  }, []); // Run the effect only once, after the initial render


  const handleEdit = (uuid) => {
    console.log(`Editing schedule with ID: ${uuid}`);
  };

  const handleDelete = (uuid) => {
    console.log(`Deleting schedule with ID: ${uuid}`);
  };

  const ScheduleCard = ({ schedule }) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" className="schedule-card">
        <CardContent>
          <Typography variant="h6" component="div">
            Date: {schedule.date}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Class Type: {schedule.class}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Instructor: {schedule.instructor}
          </Typography>
          {isLoggedIn && 
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <Button onClick={() => handleEdit(schedule.uuid)} variant="contained" style={{ backgroundColor: '#3f51b5', color: 'white', marginRight: '10px', boxShadow: 'none' }}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(schedule.uuid)} variant="outlined" style={{ borderColor: '#f44336', color: '#f44336', backgroundColor: 'transparent' }}>
                Delete
              </Button>
            </div>
          }
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <div className="schedule-page">
      <Grid container spacing={2}>
        {schedules.map((schedule) => (
          <ScheduleCard key={schedule.id} schedule={schedule} />
        ))}
      </Grid>
    </div>
  );
};

export default Schedule;
