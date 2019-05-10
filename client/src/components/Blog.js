import React from 'react';
import { Link } from 'react-router-dom'
import { NavRibbon } from '../elements/NavRibbon'

const Blog = () => {
    return (
        <NavRibbon>
            HHHHEllo world
            <Link to="/">back</Link>
        </NavRibbon>
    );
};

export default Blog;