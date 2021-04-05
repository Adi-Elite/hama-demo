import React from 'react';
import './Marquee.css';
import Hotellogo1 from '../assets/HotelLogo/logo1.png';
import Hotellogo2 from '../assets/HotelLogo/logo2.jpg';
import Hotellogo3 from '../assets/HotelLogo/logo3.jpg';
import Hotellogo4 from '../assets/HotelLogo/logo4.jpg';
import Hotellogo5 from '../assets/HotelLogo/logo5.png';


export  function Marquee() {
    return (
        <div style={{padding:"2rem"}}>
        <div className="marquee-main">
            <ul className="marquee-content">
                <li>
                <i class="fas fa-hotel"></i>
                </li>
                <li>
                    <i class="fas fa-concierge-bell"></i>
                </li>
                <li>
                    <i class="fas fa-h-square"></i>
                </li>
                <li>
                    <i class="fas fa-utensils"></i>
                </li>
                <li>
                    <i class="fas fa-shower"></i>
                </li>
            </ul>            
        </div>
    </div>
    )
}
