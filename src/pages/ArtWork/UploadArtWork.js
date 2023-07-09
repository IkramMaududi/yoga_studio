import React, {useState} from 'react';
import Axios from 'axios';
import './UploadArtWork.css';

function UploadArtWork() {
    // get credentials
    const username = localStorage.getItem('username');

    //* data to be sent & its destination
    const url = 'https://r4h536i023.execute-api.us-east-1.amazonaws.com/development/users';
    const [values, setValues] = useState({
        name: '',
        class: '',
        instructor: '',
        date: ''
    });

    //* message for success or error of uploading
    const [message, setMessage] = useState('');

    //* functions for event changes
    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'date') {
            // Convert the date string to a Date object
            const selectedDate = new Date(value);
            // Format the date as required (e.g., YYYY-MM-DD)
            const formattedDate = selectedDate.toISOString().split('T')[0];
            setValues({
                ...values,
                [name]: formattedDate
            });
        } else {
            setValues({
                ...values,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        // data to be sent
        const data = {
            'name': values.name,
            'class': values.class,
            'instructor': values.instructor,
            'date': values.date
        };

        try {
            //send data to backend API
            const response = await Axios.post(url, data);
            console.log(response.data);

            // // //* showing result of upload
            // if (response.data.uploadArtWork) {
            //     setMessage(response.data.message)
            // } else {
            //     setMessage('booking failed');
            // };
        } catch (err) {
            // console.error(err);
            console.log(err);
        };
    };

    return (
        <div id="top" className="fullSize">
            <div className="Upload">
                <h1>Schedule a Class</h1>
                <div className="UploadForm">
                    <input type='text' placeholder='Your Name...' name='name' value={values.name} onChange={handleChange} /> 
                    <input type="text" placeholder='Class..' name='class' value={values.class} onChange={handleChange} />
                    <input type="text" placeholder='Instructor Name..' name='instructor' value={values.instructor} onChange={handleChange} />
                    <input type="date" id='dateInput' name='date' value={values.date} onChange={handleChange} />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <h1 id="msg">{message}</h1>
            </div>
        </div>
    );
};

export default UploadArtWork; 