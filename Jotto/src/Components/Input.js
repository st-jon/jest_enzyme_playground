import React from 'react'
import {connect} from 'react-redux'

export class UnconnectedInput extends React.Component {
    render() {
        const content = this.props.success ? null : (
            <form className="form">
                <input data-test="component-inputBox" className="inputBox" type="text" placeholder="guess a word"></input>
                <button data-test="component-submitButton" className="btn" type="submit">Submit</button>
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

export default connect(mapStateToProps)(UnconnectedInput)