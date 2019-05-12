import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import Signout from './Signout'

const BlogWithAdmin = props => {
    return (
        <div style={{color: 'white'}}>
            <Blog {...props}/>
            hola world
            <Link to="/home">back</Link>
            <Signout />
        </div>
    )
}
 
export default BlogWithAdmin