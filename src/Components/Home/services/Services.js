import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
const [services, setService] =useState([])

useEffect(()=>{
    fetch('Services.json')
    .then(res => res.json())
    .then(data => setService(data))
},[])
    return (
        <div>
            <h1 className='service-title'>my Services</h1>
        <div className='services-container'>
        {services.map(service => <Service
             key={service.id}
             service={service}
             ></Service>)}
        </div>
        </div>
    );
};

export default Services;