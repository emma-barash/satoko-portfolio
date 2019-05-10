import { Component } from 'react';

class Toggle extends Component {
    constructor(){
        super();
        this.state = { on: false }
    }
    toggler = () => {
        this.setState(ps => ({ on: !ps.on }))
    }
    render() {
        return this.props.render({ on: this.state.on, toggler: this.toggler })
    }
}

export default Toggle;