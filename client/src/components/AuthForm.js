import React from 'react';
import { StyledAuthInput, Button, StyledAuthForm, FormImage } from '../elements/index'

const AuthForm = props => {
    const styles = {
        div:{
            display: 'flex',
            justifyContent: 'center'
        },
        // img:{
        //     height: '650px',
        //     position: 'absolute',
        //     right: '715px',
        //     top: '80px',
        //     width: '20vw',
        //     transform: 'rotate(270deg)'
        // }
    }
    const { handleChange, handleSubmit, inputs } = props
    return (
        <div style={styles.div}>
            <FormImage style={styles.img} src='https://buzzhostingservices.com/images/camellia-flower-drawing-8.png' alt='orchid'/>
            
            {/* https://ui-ex.com/images/blacking-clipart-cherry-blossom.png */}
        <StyledAuthForm onSubmit={ handleSubmit }>
            <StyledAuthInput name='username' value={ inputs.username } onChange={ handleChange } placeholder='  なまえ'/>
            <StyledAuthInput name='password' value={ inputs.password } onChange={ handleChange } placeholder='  パスワード'/>
            <Button>sign in</Button>
        </StyledAuthForm>
        </div>
    );
}
export default AuthForm;