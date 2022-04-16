import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../../images/banner1.jpg'

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
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
               <div className='banner-image'>
               <img
                  className="d-block w-100"
                  src={Banner1}
                  alt="Second slide"
                />

               </div>
        
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className='banner-image'> 
                <img
                  className="d-block w-100"
                  src={Banner1}
                  alt="Third slide"
                />
                </div>
        
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          );
};

export default Banner;