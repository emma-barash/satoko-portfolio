import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { NavRibbon } from '../elements/NavRibbon'
class Gallery extends Component {
    render() {
        const { token } = this.props
        return (
            <NavRibbon>
                Hello World
                {!token ? 
                <Link to="/">back</Link>
                :
                null
                 }
            </NavRibbon>
        );
    }
}

export default Gallery;