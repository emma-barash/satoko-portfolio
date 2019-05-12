import React from 'react';
import { Link } from 'react-router-dom'
import { NavRibbon } from '../elements/NavRibbon'

const Blog = props => {
    const { token } = props
    return (
        <NavRibbon>
            HHHHEllo world
            {!token ? 
            <Link to="/">back</Link>
            :
            null
        }
        </NavRibbon>
    );
};

export default Blog;