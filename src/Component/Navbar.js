import React from 'react';
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div style={{padding:"2rem"}}>
            <div className="nav-contain">
                <nav className="nav-items">
                    <a style={{paddingRight:"2rem"}} className="nav-child">Home</a>
                    <a style={{paddingRight:"2rem"}}>About HAMA</a>
                    <a style={{paddingRight:"2rem"}}>Activites & Misscallanous</a>
                    <a style={{paddingRight:"2rem"}}>Publications</a>
                    <a>Contact Us</a>
                </nav>
            </div>
        </div>
    )
}

 
