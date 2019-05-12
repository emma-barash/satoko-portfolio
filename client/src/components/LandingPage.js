import React from 'react';
import Navigation from './Navigation';
import { LandingImage } from '../elements/LandingImage';

// import Form from 'Form'

const LandingPage = props => {
    const styles = {
        div: {
            textAlign: 'center'
        }
    }
    return (
        <div style={styles.div}>
            <Navigation {...props}/>
        <LandingImage style={styles.img} src="http://www.satokobarashceramics.com/yahoo_site_admin/assets/images/Tea_Pot1_30.242143329_large.jpg" alt='teapot'/>
        </div>
    );
};

export default LandingPage;