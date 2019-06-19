import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GalleryRibbon, Button, StyledAuthInput, ImageContainer, StyledFileUploadInput } from '../elements/index';
import { storage } from '../firebase';
import DisplayImages from './DisplayImages'
import axios from 'axios';
import Signout from './Signout'
import { withSatoko } from '../context/SatokoProvider';

const satokoAxios = axios.create()

satokoAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allImages: [],
            image: null,
            url: '',
            progress: 0
        }
    }

        handleChange = e => {
            const { files } = e.target
            if(files[0]){
                const image = files[0]
                this.setState(() => ({ image }))
            }
        }

        handleUpload = () => {
            if(!this.state.image){
                const err = 'Please choose file!';
                return console.log(err)
            }
            const { image } = this.state;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({progress})
            },
            (error) => {
                console.error(error)
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState(ps => ({
                        url
                    }));
                    this.postImage(url)
                    this.getImages()
                })   
            })       
        }

        postImage = url => {
            satokoAxios.post('/api/gallery', {imgUrl: url})
            .then(res => {
                // console.log(res.data)
                this.getImages()
            })
        }

        getImages = () => {
            axios.get('/gallery')
            .then(res => {
                console.log(res.data)
                const data = res.data;
                this.setState(ps => {
                    return { allImages: data, ...ps.allImages}

            })
        })
    }
    deleteImage = imgId => {
        satokoAxios.delete(`/api/gallery/${imgId}`)
        .then(res => {
            console.log(res.data)
            this.getImages()
        })
    }

    componentDidMount(){
        this.getImages()
    }
    render() {
        const { token } = this.props
        console.log(token)
        const mappedImages = this.state.allImages.map((image, i) => {
            return <DisplayImages {...image} key={i} token={token} delete={this.deleteImage} progress={this.state.progress}/>
        })
        return (
            <GalleryRibbon>
                <ImageContainer>
                    {mappedImages}
                </ImageContainer>
                {!token ? 
                <Link to="/" style={{color: 'black', position: 'fixed', textDecoration: 'none', top: '0px'}}>home</Link>
                :
                <Link to="/home" style={{color: 'black', position: 'fixed', top: '0px', textDecoration: 'none', left: '5px'}}>home</Link>
                 }
                 {token ?
                    <Signout />
                    :
                    null
                 }
                 {token ? 
                //  <progress max="100" value={this.state.progress}/>
                console.log(this.state.progress)
                 :
                 null
                }
                 {token ?
                 <StyledFileUploadInput style={{color: '#D19C4C' }} type='file' onChange={this.handleChange}/>
                 :
                 null
                }
                {token ?
                <Button onClick={this.handleUpload}>upload</Button>
                :
                null
                }
            </GalleryRibbon>
        );
    }
}

export default withSatoko(Gallery);