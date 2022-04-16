import React from 'react';

const Service = ({service}) => {
    const {id, name,image,price,description} = service;
    return (
        <div>
            <img src={image}  />
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>
            <button> check out</button>
        </div>
    );
};

export default Service;