import React, {useState} from 'react';
import Axios from 'axios';
import './UploadArtWork.css';

function UploadArtWork() {

    const url = 'http://localhost:3001/user/upload';
    // const user = localStorage.getItem('username');

    // these lines below are for states & their changes
    const [title, setTitle] = useState('');
    const titleWriteChange = e => { setTitle(e.target.value) };

    const [description, setDescription] = useState('');
    const descriptionWriteChange = e => { setDescription(e.target.value) };

    const [author, setAuthor] = useState('');
    const authorWriteChange = e => { setAuthor(e.target.value) };

    const [selectedFile, setSelectedFile] = useState('');
    const fileSelectChange = e => { setSelectedFile(e.target.files[0]) };


    const [errorMessage, setErrorMessage] = useState('');

    // these codes below set key-value pairs for to-be-sent data
    const reactData = {
        image: selectedFile, 
        title, 
        author, 
        description
    };

    // this is a function for uploading files
    const fileUploadClick = async (e) => { 
        e.preventDefault();

        // codes below are to make api call to backend: uploading files to database
        try {
            // check for file extension
            const imageName = selectedFile.name;
            if (!imageName.match(/\.(jpg|jpeg|png)$/)) {
                setErrorMessage('Please upload an image with png, jpg, or jpeg file extension!');
                throw new Error('Please upload an image with png, jpg, or jpeg file extension!');
            }; 

            // check for file size
            const imageSize = Math.round((selectedFile.size));
            if (imageSize > 2000000) {
                setErrorMessage('File is too big');
                throw new Error('File is too big');
            }; 
            
            // const response = await Axios.post(url, reactData, {
            //     onUploadProgress: ProgressEvent => {
            //         console.log('Upload progress: ' + Math.round((ProgressEvent.loaded / ProgressEvent.total)*100) + '%') 
            //     }
            // });
            // console.log(response);
            console.log(reactData.image);
            // console.log(selectedFile);
        } catch (err) {
            console.error(err.message);
        };
    };

    return (
        <div className="Upload">
            <h1>Create a Post</h1>
            <div className="UploadForm">
                <input type='text' placeholder='Title...' onChange={titleWriteChange} /> 
                <input type="text" placeholder='Author..' onChange={authorWriteChange} />
                <input type='text' placeholder='Description...' onChange={descriptionWriteChange} /> 
                <input type='file' onChange={fileSelectChange} />
                <button onClick={fileUploadClick}>Upload</button>
                <h1 style={{color:"red"}}>{errorMessage}</h1>
            </div>
        </div>
    );
};

export default UploadArtWork; 