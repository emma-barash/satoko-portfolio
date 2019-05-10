import React from 'react';
import Navigation from './Navigation'

// import Form from 'Form'

const LandingPage = props => {
    const styles = {
        div: {
            textAlign: 'center'
        },
        img: {
            height: '90vh',
            width: '45vw',
            borderRadius: '100%',
            position: 'absolute',
            top: '40px',
            right: '35%',
        }
    }
    return (
        <div style={styles.div}>
            <Navigation />
        <img style={styles.img} src="http://www.satokobarashceramics.com/yahoo_site_admin/assets/images/Tea_Pot1_30.242143329_large.jpg" alt='teapot'/>
        </div>
    );
};

export default LandingPage;