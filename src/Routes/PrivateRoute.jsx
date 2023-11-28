import React from 'react';
import Context from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    //get user from context
    const {user,loading} = Context()

    //useLocation
    const location = useLocation()

    if (loading) {
        return <div className='flex fle-col justify-center items-center h-[100vh]'>
            <div>
            <span className="loading  loading-infinity loading-lg"></span>
            </div>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
    
};

export default PrivateRoute;