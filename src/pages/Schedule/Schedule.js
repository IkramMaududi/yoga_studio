import React, { useState } from 'react';
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

  const getSchedule = async () => {
    try {
      const schoolSchedule = await Axios.get(url_school);
      console.log(schoolSchedule.data);
      const usersSchedule = await Axios.get(url_users);
      console.log(usersSchedule.data);
    } catch (error) {
      console.log(error);
    };
  };

  const [schedules, setSchedules] = useState([
    { id: 1, date: '2023-07-05', classType: 'Yoga', instructor: 'Brian' },
    { id: 2, date: '2023-07-06', classType: 'Pilates', instructor: 'Kate' },
    { id: 3, date: '2023-07-05', classType: 'Yoga', instructor: 'Brian' },
    { id: 4, date: '2023-07-06', classType: 'Pilates', instructor: 'Kate' },
    { id: 5, date: '2023-07-05', classType: 'Yoga', instructor: 'Brian' },
    { id: 6, date: '2023-07-06', classType: 'Pilates', instructor: 'Kate' },
    { id: 7, date: '2023-07-05', classType: 'Yoga', instructor: 'Brian' },
    { id: 8, date: '2023-07-06', classType: 'Pilates', instructor: 'Kate' },
    { id: 9, date: '2023-07-05', classType: 'Yoga', instructor: 'Brian' },
    { id: 10, date: '2023-07-06', classType: 'Pilates', instructor: 'Kate' },
  ]);


  const handleEdit = (id) => {
    console.log(`Editing schedule with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting schedule with ID: ${id}`);
  };

  const ScheduleCard = ({ schedule }) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" className="schedule-card">
        <CardContent>
          <Typography variant="h6" component="div">
            Date: {schedule.date}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Class Type: {schedule.classType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Instructor: {schedule.instructor}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <Button onClick={() => handleEdit(schedule.id)} variant="contained" style={{ backgroundColor: '#3f51b5', color: 'white', marginRight: '10px', boxShadow: 'none' }}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(schedule.id)} variant="outlined" style={{ borderColor: '#f44336', color: '#f44336', backgroundColor: 'transparent' }}>
              Delete
            </Button>
          </div>
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
