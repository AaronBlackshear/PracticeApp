import React, { Component } from 'react';

class AddNames extends Component{
    constructor(){
        super()
        this.state={
            firstName: '',
            lastname: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
    }

    changeFirstName(val){
        this.setState({firstName: val})
    }

    changeLastName(val){
        this.setState({lastName: val})
    }

    render(){
        const { addName,id } = this.props;
        const { firstName,lastName } = this.state;
        return(
            <div id={id}>
                <input onChange={e => this.changeFirstName(e.target.value)} />
                <input onChange={e => this.changeLastName(e.target.value)} />
                <button onClick={() => addName(firstName,lastName)} >Submit</button>
            </div>
        );
    }
}

export default AddNames;