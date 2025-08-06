import React, { Children } from 'react'
import { UserAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { session } = UserAuth();

    return <> {session ? <> {children} </> : <Navigate to='/signin' />} </>

}

export default PrivateRoute
