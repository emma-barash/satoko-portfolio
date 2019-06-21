import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signout from './Signout';
import { FlexBlogs, StyledAuthInput, UploadButton, StyledFileUploadInput } from '../elements/index';
import CreateBlog from './CreateBlog';
import Form from '../shared/Form';
import axios from 'axios';
import ShowBlogs from './ShowBlogs';
import { storage } from '../firebase';

const satokoAxios = axios.create()

satokoAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            url:'',     
            blogBank: [],
            editToggle: false,
            blogToUpdate: {}
        }
    }

    fileChange = e => {
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
        const uploadTask = storage.ref(`blogImages/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            this.setState({progress})
        },
        (error) => {
            console.error(error)
        },
        () => {
            storage.ref('blogImages').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState(ps => ({
                    url
                }));
            })   
        })       
    }

    postBlog = blogBody => {
        console.log(blogBody)
        satokoAxios.post('/api/blog', {title: blogBody.title, description: blogBody.description, content: blogBody.blogContent, image: this.state.url })
        .then(res => {
            console.log(res.data)
            this.getBlog();
        })
    }
    getBlog = () => {
        axios.get('/blog')
        .then(res => {
            // console.log(res.data)
            const data = res.data;
            this.setState(ps => ({
                 blogBank: data, ...ps.blogBank
            }))
        })
    }

    deleteBlog = blogId => {
        satokoAxios.delete(`/api/blog/${blogId}`)
        .then(res => {
            console.log(res.data)
            this.getBlog()
        })
    }

    updateBlog = id => {
        const blog = this.state.blogBank.find(blog => blog._id === id)
        // console.log(blog)
        this.setState(ps => ({ editToggle: !ps.editToggle, blogToUpdate: blog }), () => console.log(this.state.blogToUpdate))
    }
    crudPutBlog = updatedBlog => {
        satokoAxios.put(`/api/blog/${this.state.blogToUpdate._id}`, updatedBlog)
        .then(res => {
            // console.log(res.data)
            this.getBlog();
        })
        this.setState(ps => ({ editToggle: !ps.editToggle}))
    }

    componentDidMount(){
        this.getBlog()
     }

    render(){
        const styles = {
            h1: {
                fontSize: '50px',
                fontWeight: 'lighter',
                color: 'black',
                position: 'absolute',
                top: '15px',
                left: '47%'
            }
        }
        console.log(this.state.blogToUpdate)
        const { token } = this.props
        const mappedBlogPosts = this.state.blogBank.map((blog, i) => <ShowBlogs {...blog} key={i} token={token} deleteBlog={this.deleteBlog} updateBlog={this.updateBlog}/>).reverse()
        return (
            <div>
                <h1 style={styles.h1}>Blog</h1>
            <FlexBlogs token={token}>
                { !token ? 
                    <Link to="/" style={{color: 'black', position: 'absolute', textDecoration: 'none', top: '5px'}}>home</Link>
                    :
                    <Link to="/home" style={{color: 'black', position: 'absolute', top: '5px', textDecoration: 'none'}}>home</Link>
                    }
                    { token && <Signout /> }
                    { token &&
                    <>
                    <StyledFileUploadInput type='file' onChange={this.fileChange} style={{position: 'absolute', top: '21%', right: '50%'}}/>
                    <UploadButton onClick={this.handleUpload} style={{position: 'absolute', top: '20%', right: '50%'}}>upload</UploadButton>
                    { this.state.editToggle ?
                            <Form
                            inputs={{title: this.state.blogToUpdate.title, description: this.state.blogToUpdate.description, blogContent: this.state.blogToUpdate.content, image: this.state.blogToUpdate.image}}
                            submit={inputs => this.crudPutBlog(inputs)}
                            render={formProps => <CreateBlog {...formProps} {...this.state}/>}/>
                        :
                            <Form
                            inputs={{title: '', description: '', blogContent: '', image: this.state.url}}
                            submit={inputs => this.postBlog(inputs)}
                            render={formProps => <CreateBlog {...formProps} {...this.state}/>}/>
                        }
                    </>
                    }
                    {mappedBlogPosts}
            </FlexBlogs>
            </div>
        );
    }
};

export default Blog;