import React, { Component } from 'react';
import axios from 'axios'
export const { Consumer, Provider } = React.createContext();

class SatokoProvider extends Component {
    constructor(){
        super();
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token'),
            posts: []
        }   
    }
    // Form information for user credentials
    login = credentials => {
        axios.post('/auth/login', credentials)
        .then(res => {
            const { user, token } = res.data;
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
            this.setState({ user, token })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.setState({ user: {}, token: '' })
    }

    render() {
        const props = {
            ...this.state,
            login: this.login,
            logout: this.logout
        }
        return (
        <Provider value={props}>
            {this.props.children}
        </Provider>
        );
    }
}
export const withSatoko = C => props => {
    return <Consumer>{value => <C {...value} {...props}/>}</Consumer>
}

export default SatokoProvider;