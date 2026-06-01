import React, { useEffect } from 'react'
import { useGetProfileQuery } from '../redux/services/api.js'
import Spinner from '../componants/Spinner.jsx';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/services/authSlice.js';


const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { data, isLoading, isError } = useGetProfileQuery();



    useEffect(() => {
        if (data) {
            dispatch(loginSuccess(data));
        }
    }, [data, dispatch])


    if (!user && isLoading) {
        return <Spinner />;
    }

    if (isError || !user) {
        return <Navigate to='/login' replace />
    }

    return (
        <Outlet />
    )
}

export default ProtectedRoute