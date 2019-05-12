import React from 'react';
import { LogoutButton, UserName } from '../elements/index';
import { withSatoko } from '../context/SatokoProvider'

const Signout = props => {
    const { user: { username }, logout } = props
    return (
        <div>
            <UserName>Hi Mum! {username}</UserName>
            <LogoutButton onClick={logout}>signout</LogoutButton>
        </div>
    );
};

export default withSatoko(Signout);