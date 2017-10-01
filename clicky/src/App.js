import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Goodbye from "./components/Goodbye";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      age: 20
    }
  }

  render() {
    return (
      <div>
      <Hello />
      <Goodbye name="Huy" name2="Sam" name3="Ben" age={this.age}/>
      </div>
    );
  }
}

export default App;
