import React, { Component } from 'react';
import './DocUpload.css';

export  class DocUpload extends Component {
    render() {
        return (
            <div className='docupload-main'>
                <h1>File Upload</h1>
                <div>Add Title</div>
                <div>
                <input type="text" placeholder="Title" />
                </div>
                <div>Upload File</div>
                <div>
                 <input type="file" placeholder="Password" />
                 </div>
                <div>
                <button variant="primary" type="submit">
                    Submit
                </button>
                </div>
            </div>  
        )
    }
}
