import React from 'react';
import { NavRibbon, StyledHtwo, StyledCtwo } from '../elements/index';
import { Link } from 'react-router-dom';
import Toggle from '../shared/Toggle';
import HiddenAuth from './HiddenAuth'

const Header = () => {
    const styles = {
        h1: {
            fontSize: '50px',
            fontWeight: 'lighter'
        },
        ceramics: {
            marginBottom: '20px'
        },
        link: {
            textDecoration: 'none',
            color: '#e3e3e3'
        }
    }
    return (
        <NavRibbon>
            <h1 style={styles.h1}>Satoko Barash</h1>
            <StyledCtwo style={styles.ceramics}>C E R A M I C S</StyledCtwo>

            ___________________________
            <Link style={styles.link} to='/about'><StyledHtwo>About the Artist</StyledHtwo></Link>
            <Link style={styles.link} to='/gallery'><StyledHtwo>Gallery</StyledHtwo></Link>
            <Link style={styles.link} to='/blog'><StyledHtwo>Blog</StyledHtwo></Link>
            <Toggle render={({ on, toggler }) => 
            !on ?
                <>
                <StyledHtwo onClick={toggler}>•</StyledHtwo>
                </>
                :
                <>
                <StyledHtwo onClick={toggler}>•</StyledHtwo>
                <HiddenAuth/> 
                {/* pass props through to change the style accordingly */}
                </>
                }
            />
        </NavRibbon>
    )
}
export default Header;
