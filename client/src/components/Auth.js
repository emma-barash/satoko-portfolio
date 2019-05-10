import React from 'react';
import { withSatoko } from '../context/SatokoProvider';
import Form from '../shared/Form'
import AuthForm from './AuthForm'

const Auth = props => {
    const { login } = props
    return (
        <div>
            <Form
            inputs={{username: '', password: ''}}
            submit={inputs => login(inputs)}
            render={formProps => <AuthForm {...formProps}/>}
            />
        </div>
    );
};

export default withSatoko(Auth);