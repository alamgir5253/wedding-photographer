import React from 'react';
import './Packages.css'
const Packages = () => {
    return (
        <div>
            <h1 className='packages-title'>my Packages</h1>
            <div className='package-container'>
                <div className='package'>
                    <h5>regulur</h5>
                    <h3>$35</h3>
                    <p>monthly</p>
                    <ul>
                        <li>hatha yoga</li>
                        <li>total body workout</li>
                        <li>spiritual guidence</li>
                        <li>meditation</li>
                        <li></li>
                    </ul>
                </div>
                <div className='package'>
                    <h5>popular</h5>
                    <h3>$55</h3>
                    <p>monthly</p>
                    <ul>
                        <li>hatha yoga</li>
                        <li>pilates for the core</li>
                        <li>spiritual guidence</li>
                        <li>meditation</li>
                        <li>unlimited access to contact</li>
                    </ul>
                </div>
                <div className='package'>
                    <h5>premium</h5>
                    <h3>$99</h3>
                    <p>monthly</p>
                    <ul>
                        <li>hatha yoga</li>
                        <li>total body workout</li>
                        <li>spiritual guidence</li>
                        <li>meditation</li>
                        <li>unlimited access to contact</li>
                        <li>pilates for the core</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Packages;