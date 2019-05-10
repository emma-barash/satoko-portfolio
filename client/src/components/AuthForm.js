import React from 'react';
import { StyledAuthInput, Button } from '../elements/index'

const AuthForm = props => {
    const styles = {
        form: {
            position: 'relative',
            float: 'right',
            right: '400px',
            border: '1px solid white',
            padding: '20px',
            borderRadius: '95px 5px',
            boxShadow: 'gray 5px 10px 20px',
            bottom: '200px',
            // display: 'flex',
            // flexDirection: 'column',
            textAlign: 'center'
        }
    }
    const { handleChange, handleSubmit, inputs } = props
    return (
        <form onSubmit={ handleSubmit } style={ styles.form }>
            <StyledAuthInput name='username' value={ inputs.username } onChange={ handleChange } placeholder='  なまえ'/>
            <StyledAuthInput name='password' value={ inputs.password } onChange={ handleChange } placeholder='  パスワード'/>
            <Button>sign in</Button>
        </form>
    );
}
export default AuthForm;