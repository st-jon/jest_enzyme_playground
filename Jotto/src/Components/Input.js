import React from 'react'
import {connect} from 'react-redux'

import {guessWord} from '../actions/actions'

export class UnconnectedInput extends React.Component {
    constructor(props) {
        super(props)
        this.inputBox = React.createRef()
    }

    submit = (e) => {
        e.preventDefault()
        if (this.inputBox.current.value.length > 0) {
            this.props.guessWord(this.inputBox.current.value)
        }
        this.inputBox.current.value = ""
    }

    render() {
        const content = this.props.success ? null : (
            <form className="form">
                <input data-test="component-inputBox" className="inputBox" ref={this.inputBox} type="text" placeholder="guess a word" autoFocus></input>
                <button data-test="component-submitButton" onClick={this.submit} className="btn" type="submit">Submit</button>
            </form>
        )
        return (
            <div data-test='component-input'>{content}</div>
        )
    }
}

const mapStateToProps = ({success}) => {
    return {success}
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput)