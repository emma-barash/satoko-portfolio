import React from 'react';
import { UpdateButton, DeleteButton, PostButton, BlogContainer, StyledBlogDescriptionInput, StyledBlogTitleInput } from '../elements/index'

const CreateBlog = props => {
const { handleChange, handleSubmit, inputs, url } = props
// console.log(inputs)
return (
    <div style={{ textAlign: 'center' }}>
        <BlogContainer onSubmit={ handleSubmit }>
        <StyledBlogTitleInput name="image" value={url} onChange={ handleChange }/>
        <StyledBlogTitleInput name="title" value={inputs.title} onChange={ handleChange } placeholder="Please enter a title"/>
        <StyledBlogDescriptionInput name="description" value={inputs.description} onChange={ handleChange } placeholder="Please enter a description"/>
                <textarea name='blogContent' value={ inputs.blogContent } onChange={ handleChange } placeholder=' Please place text here' style={{height: '20vh', borderRadius: '10px'}}/>
                <PostButton>publish</PostButton>
        </BlogContainer>
     </div>
     )
}

export default CreateBlog;