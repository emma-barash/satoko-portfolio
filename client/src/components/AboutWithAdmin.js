import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import Signout from './Signout'

const AboutWithAdmin = props => {
    console.log(props)
    const { token } = props
    return (
        <div style={{color: 'white'}}>
        <About {...props}/>
            <Signout />
        </div>
    )
}

export default AboutWithAdmin;