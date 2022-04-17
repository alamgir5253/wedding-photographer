import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
const Login = () => {
    let navigate = useNavigate();
  let location = useLocation();
  

//   let from = location.state?.from?.pathname || "/";
  
    const [userInfo, setUserInfo] = useState({
        email:'',
        password: ''
    })
    const [Errors,setErrors] = useState({
        email: '',
        password:'',
        general: ''
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);
    //   if(user){
    //       navigate(from, { replace: true });
    //     }
        
        useEffect(()=>{
            if(hookError){
                toast(hookError.message)
            }
        },[hookError])
        
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
            setErrors({...Errors, password: 'invalid password'})
            setUserInfo({...userInfo, password: ''})
        }
    }
    const handleLogin = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(userInfo.email,userInfo.password)
    }
    return (
        <div className='signup-page'>
        <div className='form-container'>  
        <h3>login</h3>
            <form onSubmit={handleLogin}>
                <input type='email' name='email' placeholder='enter email' onChange={handleEmail}/>
                {Errors && <p className='error-massage'>{Errors?.email}</p>}
                <input type='password'name='password' placeholder='enter password' onChange={handlePassword}/>
                {Errors && <p className='error-massage'>{Errors?.password}</p>}
                <button className='form-btn' type='submit'>login</button>
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

export default Login;