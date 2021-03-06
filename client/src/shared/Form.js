import { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputs: this.props.inputs
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.inputs.title !== this.props.inputs.title){
            this.setState({inputs: this.props.inputs})
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(ps =>({ 
            inputs: {
            ...ps.inputs,
            [name]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submit(this.state.inputs)
        this.setState({ inputs: this.props.inputs })
    }


    render() {
        // console.log(this.state.inputs)
        // console.log(this.props.inputs)
        return this.props.render({
            inputs: this.state.inputs,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        })
    }
}


export default Form;