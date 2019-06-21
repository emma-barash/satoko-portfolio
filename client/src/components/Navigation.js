import React from 'react';
import { NavRibbon, StyledHtwo, StyledCeramicstwo, HiddenSatoko, StyledAtwo, StyledGtwo, StyledBtwo, StyledDottwo } from '../elements/index';
import { Link } from 'react-router-dom';
import Toggle from '../shared/Toggle';
import { withSatoko } from '../context/SatokoProvider'


const Navigation = props => {
    const styles = {
        h1: {
            fontSize: '50px',
            fontWeight: 'lighter',
            color: '#D19C4C'
        },
        ceramics: {
            marginBottom: '20px'
        },
        link: {
            textDecoration: 'none',
            color: '#e3e3e3'
        }
    }
    const { token } = props
    // console.log(token)
    return (
        <NavRibbon>
            <h1 style={styles.h1}>Satoko Barash</h1>
            <StyledCeramicstwo style={styles.ceramics}>C E R A M I C S</StyledCeramicstwo>
            {!token ?
            <Link style={styles.link} to='/#/about'><StyledAtwo>About the Artist</StyledAtwo></Link>
            :
            <Link style={styles.link} to='/#/adminabout'><StyledAtwo>About the Artist</StyledAtwo></Link>
            }
            {/* {!token ? */}
            <Link style={styles.link} to='/#/gallery'><StyledGtwo>Gallery</StyledGtwo></Link>
            {/* : */}
            {/* <Link style={styles.link} to='/admingallery'><StyledGtwo>Gallery</StyledGtwo></Link> */}
            {/* } */}
            {!token ?
            <Link style={styles.link} to='/#/blog'><StyledBtwo>Blog</StyledBtwo></Link>
            :
            <Link style={styles.link} to='/#/adminblog'><StyledBtwo>Blog</StyledBtwo></Link>
            }
            <Toggle render={({ on, toggler }) => 
            !on ?
                <>
                <StyledDottwo onClick={toggler}>•</StyledDottwo>
                </>
                :
                <>
                <StyledDottwo onClick={toggler}>•</StyledDottwo>
                <Link to='/#/login'><HiddenSatoko toggler={on}>わたし　は　さとこ　です</HiddenSatoko></Link>
                {/* pass props through to change the style accordingly */}
                </>
                }
            />
        </NavRibbon>
    )
}
export default withSatoko(Navigation);
