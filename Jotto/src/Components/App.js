import React, { Component} from "react"
import {connect} from 'react-redux'

import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'

import {getSecretWord} from '../actions/actions'

export class UnConnectedApp extends Component{

  componentDidMount() {
    this.props.getSecretWord();
  }

  render(){
    return(
      <div data-test="component-app" className="App">
        <h1 data-test="welcome-display">Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {success, guessedWords, secretWord} = state
  return {success, guessedWords, secretWord}
}

export default connect(mapStateToProps, {getSecretWord})(UnConnectedApp)