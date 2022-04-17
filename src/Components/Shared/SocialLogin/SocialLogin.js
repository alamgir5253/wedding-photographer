import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './SocialLogin.css'
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);
    useEffect(()=>{
        if(error){
            toast(error.message)
        }
    },[error])
    return (
        
        <div className='social-container'>
            <div className='social-divider'>
            <div className='line'></div>
            <div><h4>or</h4></div>
            <div className='line'></div>
            </div>
            <div className="icon-container">
            <button onClick={()=>signInWithGoogle()} className="google"><p style={{margin:'0 0 0 10px'}}>login with google</p></button>
            </div>
            <ToastContainer
             position="top-center"></ToastContainer>
        </div>
    );
};

export default SocialLogin;