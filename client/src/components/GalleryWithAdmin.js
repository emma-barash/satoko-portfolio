import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Signout from './Signout';

class GalleryWithAdmin extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{color: 'white'}}>
                Hola World
                <Gallery {...this.props}/>
                <Link to="/home">back</Link>
                <Signout />
            </div>
        );
    }
}

export default GalleryWithAdmin;