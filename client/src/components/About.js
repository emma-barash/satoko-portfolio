import React, { Component } from "react";
import { AboutRibbon, AboutArtistTitle } from "../elements/index";
import { Link } from "react-router-dom";
import Signout from "./Signout";
import AboutStuff from "./AboutStuff";
import axios from 'axios';
import Form from '../shared/Form';
// import Toggle from '../shared/Toggle';
import CreateAbout from './CreateAbout';

const satokoAxios = axios.create();

satokoAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${ token }`;
    return config;
})


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        aboutContent: [],
        updateAbout: {},
        editToggle: false
    }
  }

  getAbout = () => {
    axios.get('/about').then(res => {
        this.setState(ps => ({
            aboutContent: res.data, ...ps.aboutContent
        }))
    })
  }

  postAbout = aboutBody => {
      satokoAxios.post(`/api/about`, aboutBody).then(res => {
          console.log(res.data);
          this.getAbout();
      })
  }

  updateAbout = aboutId => {
      const about = this.state.aboutContent.find(item => aboutId === item._id);
      this.setState(ps => ({
          editToggle: !ps.editToggle,
          updateAbout: about
      }))
      this.getAbout()
  }

  crudPutAbout = aboutBody => {
      satokoAxios.put(`/api/about/${ this.state.updateAbout._id }`, aboutBody).then(res => {
        console.log(res.data);
        this.getAbout();
      })
      this.setState(ps => ({ editToggle: !ps.editToggle}));
  }

  deleteAbout = aboutId => {
    satokoAxios.delete(`/api/about/${ aboutId }`)
    .then(res => {
      console.log(res.data)
      this.getAbout();
    })
  }

  componentDidMount() {
      this.getAbout()
  }

  render() {
    const { token } = this.props;
    const mappedAbout = this.state.aboutContent.map((item, i) =>  <AboutStuff key={ i } { ...item } updateAbout={ this.updateAbout } deleteAbout={ this.deleteAbout } token={ token }/> ).reverse();
    return (
      <div>
        { token && <Signout /> }
        { !token ? (
          <Link to="/" style={{textDecoration: "none" }}>
            home
          </Link>
        ) : (
          <Link to="/home" style={{textDecoration: "none" }}>
            home
          </Link>
        ) }
          { token &&
            <>
              { !this.state.editToggle ?
                <Form 
                    inputs={{ title: '', content: '' }}
                    submit={ inputs => this.postAbout(inputs) }
                    render={ formProps => <CreateAbout { ...formProps } { ...this.state } token={ token }/> }
                />
                :
                <Form 
                    inputs={{ title: this.state.updateAbout.title, content: this.state.updateAbout.content }}
                    submit={ inputs => this.crudPutAbout(inputs)}
                    render={ formProps => <CreateAbout { ...formProps } { ...this.state } />}
                />
              }
            </>
          }
        <AboutRibbon>
          <AboutArtistTitle>About the Artist</AboutArtistTitle>
          { mappedAbout }
        </AboutRibbon>
      </div>
    );
  }
}

export default About;
