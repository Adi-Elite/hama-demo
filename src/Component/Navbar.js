import React from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div style={{padding:"2rem"}}>
            <div className="nav-contain">
                <nav className="nav-items">
                    <Link style={{paddingRight:"2rem",textDecoration:"none"}} className="nav-child" to="/">Home</Link>
                    <Link style={{paddingRight:"2rem",textDecoration:"none"}} to="/joinus">Join us</Link>
                    <Link style={{paddingRight:"2rem",textDecoration:"none"}} to="/docupload">Upload</Link>
                    <Link style={{paddingRight:"2rem",textDecoration:"none"}}to="/contactus">Contact us</Link>
                </nav>
            </div>
        </div>
    )
}

 
