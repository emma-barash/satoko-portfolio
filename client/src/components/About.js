import React from 'react';
import { NavRibbon } from '../elements/NavRibbon'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <NavRibbon>
            hello world
            <Link to="/">back</Link>
        </NavRibbon>
    );
};

export default About;