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

const App = props => {
    console.log(props)
    const { user: { username, _id }, token, logout } = props
    return (
        <AppBackground>
            <Switch>
                <Route exact path='/' render={rProps => !token ? <LandingPage {...rProps} /> : <Redirect to='/'/>}/>
                <Route path='/login' render={rProps => <Auth {...rProps}/>}/>
                <Route path='/about' render={rProps => !token ? <About {...rProps}/> : <AboutWithAdmin {...rProps}/>}/>
                <Route path='/gallery' render={rProps => !token ? <Gallery {...rProps}/> : <GalleryWithAdmin {...rProps}/>}/>
                <Route path='/blog' render={rProps => !token ? <Blog {...rProps}/> : <BlogWithAdmin {...rProps}/>}/>
            </Switch>
        </AppBackground>
    )
}

export default withSatoko(App);