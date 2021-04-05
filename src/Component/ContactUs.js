import React from 'react';
import {Link} from 'react-router-dom';
import'./ContactUs.css';

export const ContactUs = () => {
    return (
        <div className="contact-main">
            <div>
                <h1>GET IN TOUCH!</h1>
                <div>First Name</div>
                <input type='text' placeholder="Your Name"/>
                <div>Email Id</div>
                <input type='email' placeholder="Email"/>
                <div>Subject</div>
                <input type='text-area' style={{height:"6.5rem"}} placeholder="Message"/>
                <div>
                    <button>
                        SEND
                    </button>
                </div>
                <div>
                    <h1>Contact Info</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged
                    </p>
                </div>
            </div>    
        </div>
    )
}
