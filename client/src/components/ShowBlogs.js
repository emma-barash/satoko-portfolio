import React from 'react';
import { UpdateButton, DeleteButton, BlogImages } from '../elements/index'
const ShowBlog = props => {
    // console.log(props)
    const { title, description, content, image, token, deleteBlog, _id, updateBlog } = props
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{title}</h1>
            {image && <BlogImages height='300px' width='400px' src={image} alt='uploaded item'/>}
            <h3>{description}</h3>
            <p style={{textAlign: 'left'}}>{content}</p>
            {token && <><UpdateButton onClick={() => updateBlog(_id)}>update</UpdateButton>
                <DeleteButton onClick={() => deleteBlog(_id)}>delete</DeleteButton></>}
        </div>
    )
}

export default ShowBlog