import React from 'react';
import { NavRibbon } from '../elements/NavRibbon'
import { Link } from 'react-router-dom'

const About = props => {
    const { token } = props 
    return (
        <NavRibbon>
            hello world
        {!token ? 
            <Link to="/">back</Link>
            :
            null
        }
        </NavRibbon>
    );
};

export default About;