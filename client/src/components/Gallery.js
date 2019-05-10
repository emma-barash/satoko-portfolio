import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { NavRibbon } from '../elements/NavRibbon'
class Gallery extends Component {
    render() {
        return (
            <NavRibbon>
                Hello World
                <Link to="/">back</Link>
            </NavRibbon>
        );
    }
}

export default Gallery;