import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email:'',
        password: '',
        confirmPassword:''
    })
    const [Errors,setErrors] = useState({
        email: '',
        password:'',
        general: ''
    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});      
      useEffect(()=>{
          if(hookError){
              toast(hookError.message)
          }
      },[hookError])
      let navigate = useNavigate();
      let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if(user){
        navigate(from)
    }
  },[user])



    const handleEmail = e =>{
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(e.target.value)
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            setErrors({...Errors, email:''})
        }else{
            setErrors({...Errors, email:'invalid email'})
            setUserInfo({...userInfo, email:''})
        }
    }

    const handlePassword = e =>{
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(e.target.value)
        console.log(validPassword)
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value})
            setErrors({...Errors, password:''})
        }else{
            setErrors({...Errors, password: 'minimum 6 characters'})
            setUserInfo({...userInfo, password: ''})
        }
    }
    const handleConfirmPassword = e =>{
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPassword: e.target.value})
            setErrors({...Errors, password:''})
        }else{
            setErrors({...Errors, password: "password don't match"})
            setUserInfo({...userInfo, confirmPassword: ''})
        }
    }
    const handleLogin = e =>{
        e.preventDefault()
        createUserWithEmailAndPassword(userInfo.email,userInfo.password)
    }
    return (
        <div className='signup-page'>
        <div className='form-container'>  
        <h3>signup</h3>
            <form onSubmit={handleLogin}>
                <input type='email' name='email' placeholder='enter email' onChange={handleEmail}/>
                {Errors && <p className='error-massage'>{Errors?.email}</p>}
                <input type='password'name='password' placeholder='enter password' onChange={handlePassword}/>
                {Errors && <p className='error-massage'>{Errors?.password}</p>}
                <input type='password'name='password' placeholder='confirm password' onChange={handleConfirmPassword}/>
                <button className='form-btn' type='submit'>SignUp</button>
                {/* {hookError && <p className='error-massage'>{hookError?.message}</p>} */}
            </form>
            <p className='form-text'>already have an account ? <Link className='form-link' to='/signup'>please login</Link></p>
        <SocialLogin></SocialLogin>
        <ToastContainer
        position="top-center"
        ></ToastContainer>
        
        </div>
    </div>
    );
};

export default Signup;