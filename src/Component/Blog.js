import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import hotel1 from '../assets/hotel1.jpg';
import hotel2 from '../assets/hotel2.jpg';
import hotel3 from '../assets/hotel3.jpg';
import { Carousel } from 'react-responsive-carousel';
import './Blog.css';

 export const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-main">
                <div>
                    <h1>Hotel Association of Mount Abu</h1>
                    <hr style={{backgroundColor:"orange",height:"0.2rem"}}></hr>
                    <Carousel showThumbs={false} dynamicHeight={true} infiniteLoop={true}  showStatus={false}  showIndicators={true} showArrows={true}>
                        <div>
                            <img  src={hotel1}height="500" alt='1'/>
                            <p>
                            Feel free to download, edit and use this template for your websites. 
                            </p>
                        </div>
                        <div>
                            <img  src={hotel2}  height="500"alt='1'/>
                            <p>
                            Credit goes to Public Domain Picutures for the header picture used in this template.
                            </p>
                        </div>
                        <div>
                            <img src={hotel3} height="500"  alt='1'/>
                            <p>
                            Credit goes to Public Domain Picutures for the header picture used in this template.
                            </p>
                        </div>
                    </Carousel>
                    <p>Free Website Templates are provided by TemplateMo. 
                        Feel free to download, edit and use this template for your websites. 
                        Credit goes to Public Domain Picutures for the header picture used in this template.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed et quam vitae ipsum vulputate varius vitae semper nunc.
                        Quisque eget elit quis augue pharetra feugiat. Suspendisse turpis arcu, 
                        dignissim ac laoreet a, condimentum in massa.</p>
                    <hr style={{backgroundColor:"orange",height:"0.2rem"}}></hr>
                    <h1>Tours & Travels</h1>
                    <hr style={{backgroundColor:"orange",height:"0.2rem"}}></hr>
                    Sed et quam vitae ipsum vulputate varius vitae semper nunc. Quisque eget elit quis augue pharetra feugiat.
                     Suspendisse turpis arcu, dignissim ac laoreet a, condimentum in massa.
                    Donec a nunc nec est euismod congue
                    Duis id erat quis sem eleifend molestie.
                    Proin at urna eu sem convallis elementum
                    Ut dapibus tincidunt tempus. Aliquam ac pellentesque mauris. Donec at nisl tellus.
                    Aenean tristique vehicula laoreet
                    Vestibulum ante ipsum primis in faucibus orci luctus.
                    Praesent et odio sit amet
                </div>
            </div>
        </div>
    )
}

