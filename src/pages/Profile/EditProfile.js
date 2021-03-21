import React, {useState} from 'react';
import Axios from 'axios';
import './EditProfile.css';

function EditProfile() {
    // if the user has never filled his/her profile before, then start from empty
    // const [values, setValues] = ({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     age: '',
    //     birthdate: '',
    //     artstyle: '',
    //     gender: '',
    //     bio: ''
    // });

    // const [avatar, setAvatar] = useState('');

    // // if the user has filled his/profile before, then get the data from the DB





    // // this is the data to be sent
    // const fd = new FormData();
    // fd.append('avatar', avatar);
    // fd.append('values', values);

    // const url = 'http://localhost:3001/user/profile';
    // const user = localStorage.getItem('username');

    // const handleSubmit = async (e) => { };
    // const handleChange = async (e) => { };

    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Get started with us today! Complete your account!</h1>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">username</label>
                    <input id="name" type="text" name="name" className="form-input" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">email</label>
                    <input id="email" type="email" name="email" className="form-input" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="phone" className="form-label">phone</label>
                    <input id="phone" type="tel" name="phone" className="form-input" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="age" className="form-label">age</label>
                    <input id="age" type="number"  name="age" className="form-input" min="1" max="200" step="1" />
                </div>
                <div>
                    <label htmlFor="date">Birthdate</label>
                    <input id="date" type="date" name="date" min="1800-01-01"/>
                </div>
                <div>
                    Art Style
                    <div>
                        <label htmlFor="traditional" className="form-label">traditional</label>
                        <input id="traditional" type="checkbox" name="traditional" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="non-traditional" className="form-label">non-traditional</label>
                        <input id="non-traditional" type="checkbox" name="non-traditional" className="form-input" />
                    </div>
                </div>
                <div>
                    Gender 
                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"/>
                    </div>
                    <div>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" name="bio" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label htmlFor="file">File</label>
                    <input type="file" id="file" name="file"/>
                </div>
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditProfile;