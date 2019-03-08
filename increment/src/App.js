import React, { Component} from "react"
import {hot} from "react-hot-loader";
import "./App.css"

class App extends Component{
  constructor() {
    super()
    this.state= {
      counter: 0,
      error: false
    }
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

  inc() {
    if (this.state.error) {
      this.setState({error: false, counter: this.state.counter + 1})
    } else {
      this.setState({counter: this.state.counter + 1})
    }
  }

  dec() {
    if (this.state.counter === 0) {
      this.setState({error: true})
    } else {
      this.setState({counter: this.state.counter - 1})
    }
  }

  render(){
    return(
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">the counter is currently {this.state.counter}</h1>
        <button onClick={this.inc} data-test="increment-button">Increment Counter</button>
        <button onClick={this.dec} data-test="decrement-button">Decrement Counter</button>
        {this.state.error && <p data-test="error-message">you cannot decrement counter under 0</p>}
      </div>
    )
  }
}

export default hot(module)(App)