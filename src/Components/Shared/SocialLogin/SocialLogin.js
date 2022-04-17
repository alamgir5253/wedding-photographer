import React from 'react';
import './SocialLogin.css'
const SocialLogin = () => {
    return (
        <div className='social-container'>
            <div className='social-divider'>
            <div className='line'></div>
            <div><h4>or</h4></div>
            <div className='line'></div>
            </div>
            <div className="icon-container">
            <button className="google"><p style={{margin:'0 0 0 10px'}}>login with google</p></button>
            </div>
        </div>
    );
};

export default SocialLogin;