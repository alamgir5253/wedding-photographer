import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../../images/banner1.jpg'
import Banner2 from '../../../../images/banner2.jpg'
import Banner3 from '../../../../images/banner3.jpg'
import  './Banner.css'

const Banner = () => {
  
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    //  to fade out ( fade)
        return (
            <div >
                <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
               <div className='banner-image'>
               <img
                  className="d-block w-100"
                  src={Banner1}
                  alt="First slide"
                />
               </div>
                <Carousel.Caption>
                  <h3>I'M Alamgir Hossain</h3>
                  <p>This new wedding photo and video package is designed by me.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
               <div className='banner-image'>
               <img
                  className="d-block w-100"
                  src={Banner2}
                  alt="Second slide"
                />

               </div>
        
                <Carousel.Caption>
                  <h3>have fun</h3>
                  <p>have fun with my new latest camera technology.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className='banner-image'> 
                <img
                  className="d-block w-100"
                  src={Banner3}
                  alt="Third slide"
                />
                </div>
        
                <Carousel.Caption>
                  <h3>wish for your moment</h3>
                  <p>
                  This new wedding photo and video package is designed by me.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          );
};

export default Banner;