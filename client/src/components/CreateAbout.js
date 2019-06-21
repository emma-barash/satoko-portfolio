import React from 'react';
import { PostButton, BlogContainer, StyledBlogDescriptionInput, StyledAboutTitleInput } from '../elements/index'

const CreateAbout = props => {
    const { inputs, handleChange, handleSubmit } = props
    return (
        <div>
            <form onSubmit={ handleSubmit}>
                <StyledAboutTitleInput name="title" value={ inputs.title } onChange={ handleChange }/>
                <StyledBlogDescriptionInput name="content" value={ inputs.content } onChange={ handleChange }/>
                <PostButton>publish</PostButton>
            </form>
        </div>
    );
};

export default CreateAbout;