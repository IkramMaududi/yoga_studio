import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './ShowArtWork.css';

function ShowArtWork() {
    //* sent data & get it back from DB
    const [downloads, setDownloads] = useState([]);
    useEffect( () => {
        const url = 'http://localhost:3001/user/artwork';
        const username = localStorage.getItem('username');
        const getData = async () => {
            await Axios
                    .get(url, { headers: {username} })
                    .then(res => setDownloads(res.data))
        };
        getData();
    }, []);

    //* process received data
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return (
        <>
            {downloads.exist ? (
                <div className="Portfolio">
                    {downloads.data.map((val, index) => {
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
            ) : (
                <div>
                    You have no art work yet
                </div>
            )}
        </>
    );
};

export default ShowArtWork; 