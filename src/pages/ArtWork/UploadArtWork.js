import React, {useState} from 'react';
import Axios from 'axios';
import './UploadArtWork.css';

function UploadArtWork() {
    // get credentials
    const username = localStorage.getItem('username');

    // data to be sent & its destination
    const url = 'http://localhost:3001/user/artwork';
    const [values, setValues] = useState({
        title: '',
        author: '',
        description: ''
    });
    const [selectedFile, setSelectedFile] = useState('');

    // message for success or error of uploading
    const [message, setMessage] = useState('');

    // these codes below set key-value pairs for to-be-sent data
    const fd = new FormData();
    fd.append('image', selectedFile);
    fd.append('title', values.title);
    fd.append('author', values.author);
    fd.append('description', values.description);
    fd.append('username', username)

    // this is a function for uploading files
    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const fileSelectChange = e => { setSelectedFile(e.target.files[0]) };
    const handleSubmit = async (e) => { 
        e.preventDefault();
        // codes below are to make api call to backend: uploading files to database
        try {
            // check for file extension
            const imageName = selectedFile.name;
            if (!imageName.match(/\.(jpg|jpeg|png)$/)) return setMessage('Please upload an image with png, jpg, or jpeg file extension!');

            // check for file size
            const imageSize = Math.round((selectedFile.size));
            if (imageSize > 2000000) return setMessage('File is too big');
            
            const response = await Axios.post(url, fd, {
                onUploadProgress: ProgressEvent => {
                    console.log('Upload progress: ' + Math.round((ProgressEvent.loaded / ProgressEvent.total)*100) + '%');
                    console.log(username)
                }
            });

            // showing result of upload
            if (response.data.uploadArtWork) {
                setMessage(response.data.message)
            } else {
                setMessage('Image upload failed');
            };
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <div className="Upload">
            <h1>Create a Post</h1>
            <div className="UploadForm">
                <input type='text' placeholder='Title...' name='title' value={values.title} onChange={handleChange} /> 
                <input type="text" placeholder='Author..' name='author' value={values.author} onChange={handleChange} />
                <input type='text' placeholder='Description...' name='description' value={values.description} onChange={handleChange} /> 
                <input type='file' onChange={fileSelectChange} />
                <button onClick={handleSubmit}>Upload</button>
                <h1 style={{color:"red"}}>{message}</h1>
            </div>
        </div>
    );
};

export default UploadArtWork; 