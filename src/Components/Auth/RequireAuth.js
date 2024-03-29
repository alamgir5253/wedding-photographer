import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <p>loading...</p>
    }
    if(user){
        return children
    }else{
        return <Navigate to='/login'state={{from: location}} replace ></Navigate>
    }
};

export default RequireAuth;