import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddNames from './components/AddNames';
import EditName from './components/EditName';

class App extends Component {
  constructor(){
    super()
    this.state={
      nameList: [],
      editFlag: false
    }
    this.addName = this.addName.bind(this);
    this.editFlag =this.editFlag.bind(this);
    this.changeName =this.changeName.bind(this);
  }

  componentDidMount(){
    axios.get('/api/people')
    .then(res => this.setState({nameList: res.data}))
    .catch(console.log);
  }

  addName(first,last){
    axios.post('/api/people', {first,last})
    .then(res => this.setState({nameList: res.data}))
    .catch(console.log);
  }

  editFlag(){
    if(!this.state.editFlag){
      this.setState({editFlag: true})
      console.log(true)
    }
    else{
      this.setState({editFlag: false})
      console.log(false)
    }
  }

  changeName(id,first,last){
    axios.put(`/api/people/:${id}`, {first,last})
    .then(res => console.log(id))
    .catch(console.log);
  }

  render() {
    // console.log(this.state.nameList)
    const { nameList,editFlag } = this.state;
    let names = this.state.nameList.map((cur,ind) => {
      return (<div key={ind} id={cur.id}> <h1>{cur.first_name} {cur.last_name}</h1> 
      <button onClick={() => this.editFlag()}>Edit</button> <EditName editFlag={editFlag} changeName={this.changeName} id={cur.id} /> </div>)
    })
    return (
      <div className="App">
        <AddNames addName={this.addName} />
        {/* <EditName editFlag={editFlag} /> */}
        {names}
      </div>
    );
  }
}

export default App;
