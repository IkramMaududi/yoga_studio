import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './EditProfile.css';

function ProfileEdit() {
    //* states of data to be sent 
    const NULLVALUE = {
        fullname: '',
        age: '',
        email: '',
        phone: '',
        location: '',
        gender: 'male',
        artstyle: 'traditional',
        bio: ''
    };
    const [values, setValues] = useState(NULLVALUE);
    const [avatar, setAvatar] = useState(null);

    //* message for success or error of uploading
    const [message, setMessage] = useState('');

    //* check whether the user has ever filled the profile before
    // const url = 'http://localhost:3001/user/profile';
    const url = 'https://cool-art-social-media.herokuapp.com/user/profile';
    useEffect( () => {
        const username = localStorage.getItem('username');
        const getData = async () => {
            try {
                const response = await Axios.get(url, {
                    headers: {
                        username
                }});
                if (response.data.exist) {
                    console.log('a profile exists, you can update it');

                    const {fullname, email, phone, age, location, artstyle, gender, bio, avatar} = response.data.data[0];
                    setValues({ fullname, age, email, phone, location, gender, artstyle, bio });
                    setAvatar(avatar);
                } else {
                    console.log('a profile does not exist, make a new one please');
                };
            } catch (err) {
                console.error(err);
            };
        };
        getData();
    }, []);
    
    const sendData = async () => {
        const username = localStorage.getItem('username');
        const fd = new FormData();
        fd.append('avatar', avatar);
        fd.append('fullname', values.fullname);
        fd.append('age', values.age);
        fd.append('email', values.email);
        fd.append('phone', values.phone);
        fd.append('location', values.location);
        fd.append('gender', values.gender);
        fd.append('artstyle', values.artstyle);
        fd.append('bio', values.bio);

        console.log(fd);
        const response = await Axios.post(url, fd, {
            headers: {
                username
            }
        });

        //* showing result of upload
        if (response.data.editProfile) {
            setMessage(response.data.message)
        } else {
            setMessage('edit profile failed');
        };
    };

    //* functions for event changes
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const fileSelectChange = e => { 
        console.log(e.target.files[0])
        setAvatar(e.target.files[0]) };
    const handleReset = e => {
        e.preventDefault(); 
        setAvatar('');
        setValues(NULLVALUE);
    };
    const handleSubmit = e => {
        e.preventDefault();
        sendData();
    };

    return (
        <div id="top">
            <div className="profile-form">
                <h1>Profile Form</h1>
            </div>
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <h2 className="name">Full Name</h2>
                    <input className="form-input" type="text" name="fullname" value={values.fullname} onChange={handleChange} />

                    <h2 className="name">Age</h2>
                    <input className="form-input" type="number" name="age" min="1" max="200" step="1" value={values.age} onChange={handleChange} />

                    <h2 className="name">Email</h2>
                    <input className="form-input" type="email" name="email" value={values.email} onChange={handleChange} />

                    <h2 className="name">Phone</h2>
                    <input className="form-input" type="tel" name="phone" value={values.phone} onChange={handleChange} />

                    <h2 className="name">Location</h2>
                    <input className="form-input" type="text" name="location" value={values.location} onChange={handleChange} />

                    <h2 className="name">Gender</h2>
                    <select className="gender" name="gender" value={values.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <div id="art">
                        <h2 id="art-style">Art Style</h2>
                        <div className="cool">
                            <label className="radio">
                                <input className="radio-one" type="radio" name="artstyle" value="traditional" checked={values.artstyle === 'traditional'} onChange={handleChange} />
                                <span className="checkmark"></span>
                                Traditional
                            </label>
                            <label className="radio"> 
                                <input className="radio-two" type="radio" name="artstyle" value="non-traditional" checked={values.artstyle === 'non-traditional'} onChange={handleChange} />
                                <span className="checkmark"></span>
                                Non Traditional
                            </label>
                        </div>
                    </div>

                    <h2 className="name">Bio</h2>
                    <textarea className="bio" name="bio" placeholder="Tell us a little about yourself" value={values.bio} onChange={handleChange} ></textarea>

                    <h2 className="name">Choose Another Picture</h2>
                    <input className="chooseAvatar" type="file" name="avatar" onChange={fileSelectChange} />

                    <div id="box">
                        <button className="button1" type="reset" onClick={handleReset}>Reset</button>
                        <button className="button1" type="submit">Save</button>
                    </div>
                </form>
                <h1 id="msg">{message}</h1>
            </div>
        </div>
    );
};

export default ProfileEdit;