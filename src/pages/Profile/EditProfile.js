import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
import './EditProfile.css';;

function ProfileEdit() {
/*  // check whether the user has ever filled the profile before
    const url = 'http://localhost:3001/user/profile';
    const [profile, setProfile] = useState();
    useEffect( () => {
        const username = localStorage.getItem('username');
        const getData = async () => {
            await Axios
                    .get(url, { headers: {username} })
                    .then(res => setProfile(res.data))
        };
        getData();
    }, []);

    // if the user's profile exists in DB, then it's patch profile, else it's fill profile
    if (!profile) {
        // here fill the profile for the first time
    } else {
        // here edit the profile
    }; */

    // intial value
    const INITIALVALUE = {
        name: '',
        age: '',
        email: '',
        phone: '',
        location: '',
        gender: '',
        artStyle: 'traditional',
        bio: ''
    };

    // state of the page
    const [values, setValues] = useState(INITIALVALUE);
    const [avatar, setAvatar] = useState('');

    // functions for change in value & submit value
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const fileSelectChange = e => { setAvatar(e.target.files[0]) };
    const handleClick = e => {
        e.preventDefault(); 
        setAvatar('');
        setValues(INITIALVALUE);
    };

    // function for validating form, before sending to backend
    // const validation = e => {
    // };

    // sending data to backend
    const handleSubmit = e => {
        e.preventDefault();
        // validation();
        console.log(values);
        console.log(avatar);
    };

    return (
        <div id="top">
            <div className="profile-form">
                <h1>Profile Form</h1>
            </div>
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <h2 className="name">Name</h2>
                    <input className="form-input" type="text" name="name" value={values.name} onChange={handleChange} />

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
                                <input className="radio-one" type="radio" name="artStyle" value="traditional" checked={values.artStyle === 'traditional'} onChange={handleChange} />
                                <span className="checkmark"></span>
                                Traditional
                            </label>
                            <label className="radio"> 
                                <input className="radio-two" type="radio" name="artStyle" value="non-traditional" checked={values.artStyle === 'non-traditional'} onChange={handleChange} />
                                <span className="checkmark"></span>
                                Non Traditional
                            </label>
                        </div>
                    </div>

                    <h2 className="name">Bio</h2>
                    <textarea className="bio" name="bio" placeholder="Tell us a little about yourself" value={values.bio} onChange={handleChange} ></textarea>

                    <h2 className="name">Profile Picture</h2>
                    <input className="form-input" type="file" name="avatar" onChange={fileSelectChange} />

                    <div id="box">
                        <button className="button1" type="reset" onClick={handleClick}>Reset</button>
                        <button className="button1" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEdit;