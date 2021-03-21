import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './ShowArtWork.css';

function ShowArtWork() {
    // decide whether the user is login or not
    useEffect(() => {
        if (!localStorage.getItem('loggedIn')) {
            localStorage.setItem('loggedIn', false);
        };
    }, []);

    const url = 'http://localhost:3001/user/download';
    // const user = localStorage.getItem('username');

    // call for uploaded files
    const [downloads, setDownloads] = useState([]);
    // useEffect(() => {
    //     Axios
    //         .post(url, user)
    //         .then(res => setDownloads(res.data))
    // }, []);
    useEffect(() => {
        Axios
            .get(url)
            .then(res => setDownloads(res.data))
            // .then(res => console.log(res.data))
    }, []);

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    // something is off over here
    return (
        <div className="Portfolio">
            {downloads.map((val, index) => {
                return (
                    <div key={index} className="Post">
                        <div className="Image">
                            <img src={`data:image/png;base64, ${arrayBufferToBase64(val.image.data)}`} alt="list of images" />
                        </div>
                        <div className="Content">
                            <div className="title"> {val.title} / by @{val.author}</div>
                            <div className="description">{val.description}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ShowArtWork; 