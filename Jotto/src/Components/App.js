import React, { Component} from "react"
import {hot} from "react-hot-loader";

import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'

class App extends Component{
  constructor() {
    super()
   
  }

  render(){
    return(
      <div data-test="component-app" className="App">
        <h1 data-test="welcome-display">Jotto</h1>
        <Congrats success={true} />
        <Input />
        <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]}/>
      </div>
    )
  }
}

export default hot(module)(App)