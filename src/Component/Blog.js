import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import hotel1 from '../assets/hotel1.jpg';
import hotel2 from '../assets/hotel2.jpg';
import hotel3 from '../assets/hotel3.jpg';
import hotel4 from '../assets/hotel4.jpg';
import hotel5 from '../assets/hotel5.jpg';
import hotel6 from '../assets/hotel6.jpg';



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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                        </div>
                        <div>
                            <img  src={hotel2}  height="500"alt='1'/>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src={hotel3} height="500"  alt='1'/>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                             printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src={hotel4} height="500"  alt='1'/>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                             printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src={hotel5} height="500"  alt='1'/>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                             printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src={hotel6} height="500"  alt='1'/>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                             printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </Carousel>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed et quam vitae ipsum vulputate varius vitae semper nunc.
                        Quisque eget elit quis augue pharetra feugiat. Suspendisse turpis arcu, 
                        dignissim ac laoreet a, condimentum in massa.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.    
                    </p>
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

