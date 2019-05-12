import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
    const { token, component: Component, path, redirectTo, ...rest } = props
    return (
        token ?
        <Route path={path} render={rProps => 
            <Component {...rProps} {...rest} token={token}/>
        }/>
        : 
        <Redirect to={redirectTo} />
    )
}

export default ProtectedRoute;