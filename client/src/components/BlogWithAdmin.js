import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import Signout from './Signout'

const BlogWithAdmin = props => {
    return (
        <div style={{color: 'black'}}>
            <Blog {...props}/>
        </div>
    )
}
 
export default BlogWithAdmin