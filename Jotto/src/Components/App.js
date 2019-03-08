import React, { Component} from "react"
import {hot} from "react-hot-loader";

class App extends Component{
  constructor() {
    super()
   
  }

  render(){
    return(
      <div data-test="component-app" className="App">
        <h1 data-test="welcome-display">Welcome to Jotto</h1>
      </div>
    )
  }
}

export default hot(module)(App)