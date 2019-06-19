import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppBackground } from './elements/BackDrop';
import LandingPage from './components/LandingPage';
import { withSatoko } from './context/SatokoProvider';
import About from './components/About';
import AboutWithAdmin from './components/AboutWithAdmin';
import Gallery from './components/Gallery';
import GalleryWithAdmin from './components/GalleryWithAdmin';
import BlogWithAdmin from './components/BlogWithAdmin';
import Blog from './components/Blog';
import Auth from './components/Auth';
import AuthLandingPage from './components/AuthLandingPage';
import ProtectedRoute from './shared/ProtectedRoute';
import './elements/App.css'

const App = props => {
    const { user: { username, _id }, token, logout } = props
    return (
        <AppBackground>
            <Switch>
                <Route exact path='/'   render={rProps =>  <LandingPage {...rProps} {...props}/>}/>
                <Route path='/login'    render={rProps => !token ? <Auth {...rProps}/> : <Redirect to='/home'/>}/>
                <Route path='/about'    render={rProps => <About {...rProps}/> }/>
                <Route path='/gallery'  render={rProps => <Gallery {...rProps}/> }/>
                <Route path='/blog'     render={rProps => <Blog {...rProps}/>}/>

                {/* ########################################### AFTER ADMIMN ####################################### */}

                <ProtectedRoute  path='/home'           token={token} component={AuthLandingPage}   redirectTo='/' username={username}/>
                <ProtectedRoute  path='/adminabout'     token={token} component={AboutWithAdmin}    redirectTo='/' username={username}/>
                <ProtectedRoute  path='/admingallery'   token={token} component={GalleryWithAdmin}  redirectTo='/' username={username}/>
                <ProtectedRoute  path='/adminblog'      token={token} component={BlogWithAdmin}     redirectTo='/' username={username}/>
            </Switch>
        </AppBackground> // figure out how to lock auth in Firebase.
    )
}

export default withSatoko(App);

// path='/profile' 
// token={token}
// component={Profile}
// redirectTo='/'
// username={username}