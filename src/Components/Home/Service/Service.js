import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name,image,price,description} = service;
    return (
        <div className='service-container'>
            <div className='service-image'>
            <img className='w-100' src={image}  />
            </div>
            <div className='service-info'>
            <h4><span></span>{name}</h4>
            <p>service amount{price}</p>
            <p>{description}</p>
            </div>
            <Link className='link-button' to='/login'> check out</Link>
        </div>
    );
};

export default Service;