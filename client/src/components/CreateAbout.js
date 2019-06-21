import React from 'react';
import { PostAbout, StyledAboutForm, StyledAboutDescription, StyledAboutTitleInput } from '../elements/index'

const CreateAbout = props => {
    const { inputs, handleChange, handleSubmit } = props
    return (
        <StyledAboutForm>
            <form onSubmit={ handleSubmit}>
                <StyledAboutTitleInput name="title" value={ inputs.title } onChange={ handleChange }/>
                <StyledAboutDescription name="content" value={ inputs.content } onChange={ handleChange }/>
                <PostAbout>publish</PostAbout>
            </form>
        </StyledAboutForm>
    );
};

export default CreateAbout;