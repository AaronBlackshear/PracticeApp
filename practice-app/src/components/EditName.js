import React, { Component } from 'react';

class EditName extends Component{
    constructor(){
        super()
        this.state={
            updatedFirst: '',
            updatedLast: ''
        }
        this.editFirst = this.editFirst.bind(this);
        this.editLast = this.editLast.bind(this);
    }

    editFirst(val){
        this.setState({updatedFirst: val})
        console.log(this.state.updatedFirst)
    }

    editLast(val){
        this.setState({updatedLast: val})
        console.log(this.state.updatedLast)
    }

    render(){
        const { editFlag,changeName,id } = this.props;
        const { updatedFirst,updatedLast } = this.state;
        if(!editFlag){
            return <div />
        }
        else{
            return (<div> <input onChange={e => this.editFirst(e.target.value)} />
            <input onChange={e => this.editLast(e.target.value)} />
            <button onClick={() => changeName(id,updatedFirst,updatedLast)} >Change</button> </div>)
        }
        return(
            <div>
                
            </div>
        )
    }
}

export default EditName;