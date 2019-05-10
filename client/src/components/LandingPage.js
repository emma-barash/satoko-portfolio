import React from 'react';
import Navigation from './Navigation'
import HiddenAuth from './HiddenAuth';

// import Form from 'Form'

const LandingPage = props => {
    const styles = {
        div: {
            textAlign: 'center'
        },
        img: {
            height: '100vh',
            width: '55%',
            borderRadius: '100%',
            position: 'absolute',
            top: '10px',
            right: '24%'
        }
    }
    return (
        <div style={styles.div}>
            <Navigation />
        <img style={styles.img} src="http://www.satokobarashceramics.com/yahoo_site_admin/assets/images/Tea_Pot1_30.242143329_large.jpg" alt='teapot'/>
            <HiddenAuth />
        </div>
    );
};

export default LandingPage;