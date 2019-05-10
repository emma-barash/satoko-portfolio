import React from 'react';
import { NavRibbon, StyledHtwo, StyledCtwo, HiddenSatoko, StyledAtwo, StyledGtwo, StyledBtwo, StyledDottwo } from '../elements/index';
import { Link } from 'react-router-dom';
import Toggle from '../shared/Toggle';


const Navigation = () => {
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

            <Link style={styles.link} to='/about'><StyledAtwo>About the Artist</StyledAtwo></Link>
            <Link style={styles.link} to='/gallery'><StyledGtwo>Gallery</StyledGtwo></Link>
            <Link style={styles.link} to='/blog'><StyledBtwo>Blog</StyledBtwo></Link>
            <Toggle render={({ on, toggler }) => 
            !on ?
                <>
                <StyledDottwo onClick={toggler}>•</StyledDottwo>
                </>
                :
                <>
                <StyledDottwo onClick={toggler}>•</StyledDottwo>
                <Link to='/login'><HiddenSatoko toggler={on}>わたし　わ　さとこ　です</HiddenSatoko></Link>
                {/* pass props through to change the style accordingly */}
                </>
                }
            />
        </NavRibbon>
    )
}
export default Navigation;
