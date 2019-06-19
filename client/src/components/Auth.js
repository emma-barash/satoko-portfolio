import React from 'react';
import { withSatoko } from '../context/SatokoProvider';
import Form from '../shared/Form'
import AuthForm from './AuthForm';
import Navigation from './Navigation';
import { Link } from 'react-router-dom'

const Auth = props => {
    const { login } = props
    return (
        <div>
            <Navigation />
            <Form
            inputs={{username: '', password: ''}}
            submit={inputs => login(inputs)}
            render={formProps => <AuthForm {...formProps}/>}
            />
            <Link to="/" style={{color: 'black', position: 'absolute', textDecoration: 'none', top: '5px'}}>home</Link>
        </div>
    );
};

export default withSatoko(Auth);