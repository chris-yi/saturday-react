import React, { Component } from 'react';
import './App.css';
import Display from "./components/Display"

class App extends Component {
  constructor(){
    super()

    this.state = {
      count: 0
    }
    this.countUp = this.countUp.bind(this)
  }

  //This is where you create a method()  (function you use in click me)

  countUp(){
    this.setState({
      count: this.state.count + 1
    })
  }



  render() {
    return (
      <div>
        <Display count={this.state.count}/>
        <button onClick={this.countUp.bind(this)}>Click Me!!!</button>
      </div>
    )
  }
}

export default App;
