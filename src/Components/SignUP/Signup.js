import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './SignUp.css'
const Signup = () => {
    return (
        <div className='signup-page'>
            <div className='form-container'>
                <h3>signup</h3>
                <form>
                    <input type='text' name='text' placeholder='enter name'/>
                    <input type='email' name='email' placeholder='enter email'/>
                    <input type='password'name='password' placeholder='enter password'/>
                    <input type='password' name='confirmPassword' placeholder='confirmPassword'/>
                    <div className='checked-container'>
                    <input  className='checkbox' type='checkbox' />
                    <p>checked me out</p>
                    </div>
                    <button className='form-btn' type='submit'>SignUp</button>
                </form>
                <p className='form-text'>already have an account ? <Link className='form-link' to='/login'>please login</Link></p>
            <SocialLogin></SocialLogin>
            
            </div>
        </div>
    );
};

export default Signup;