import React from 'react';
import { withSatoko } from '../context/SatokoProvider';
import LandingPage from './LandingPage';
import Signout from './Signout';

const AuthLandingPage = props => {
    // console.log(props)
    const { user: { username, _id }, token, logout } = props
    return (
        <div>
            <LandingPage />
            <Signout {...props} />
            {/* <UserName>Hello, {username}</UserName>
            <LogoutButton onClick={logout}>signout</LogoutButton> */}
        </div>
    );
};

export default withSatoko(AuthLandingPage);