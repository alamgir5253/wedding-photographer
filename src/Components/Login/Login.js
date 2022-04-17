import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    return (
        <div className='signup-page'>
        <div className='form-container'>  
        <h3>login</h3>
            <form>
                <input type='email' name='email' placeholder='enter email'/>
                <input type='password'name='password' placeholder='enter password'/>
                <button className='form-btn' type='submit'>SignUp</button>
            </form>
            <p className='form-text'>already have an account ? <Link className='form-link' to='/signup'>please login</Link></p>
        <SocialLogin></SocialLogin>
        
        </div>
    </div>
    );
};

export default Login;