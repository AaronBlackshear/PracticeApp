import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      firstName: '',
      lastName: ''
    }
    this.changeFirst = this.changeFirst.bind(this);
    this.changeLast = this.changeLast.bind(this);
  }

  changeFirst(val){
    this.setState({firstName: val})
  }

  changeLast(val){
    this.setState({lastName: val})
  }

  componentDidMount(){
    axios.post('/api/people')
  }

  render() {
    return (
      <div className="App">
        <h3>First Name: <input onChange={e => this.changeFirst(e.target.value)} /></h3>
        <h3>Last Name: <input onChange={e => this.changeLast(e.target.value)} /></h3>
      </div>
    );
  }
}

export default App;
