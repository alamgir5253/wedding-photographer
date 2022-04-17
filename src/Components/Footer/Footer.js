import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <div className='footer-container'>
                <div><h4>logo</h4></div>
                <div className='address'>
                    <ul>
                        <li>kamgangin chor, dhaka-1211</li>
                        <li>call: 01871754222</li>
                        <li>{year}</li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h5>payment by</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;