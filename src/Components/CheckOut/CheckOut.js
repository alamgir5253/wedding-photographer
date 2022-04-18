import React from 'react';
import './CheckOut.css'
const CheckOut = () => {
    return (
        <div className='signup-page'>
        <div className='form-container'>  
        <h4>checkout form</h4>
           
                <input type='text' name='email' placeholder='enter name'/>
                <input type='email' name='email' placeholder='enter email'/>
                <input type='password'name='password' placeholder='enter password'/>
                <input type='password'name='password' placeholder='confirm password' />
                <button className='form-btn' type='submit'>check out</button>
  
            

        
        
        </div>
    </div>
    );
};

export default CheckOut;