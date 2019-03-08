import React from 'react'
import PropTypes from 'prop-types'


const GuessedWords = (props) => {
    let contents
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test='guessedWord-instruction'>
                Try to guess the secret word
            </span>
        )
    } else {
        const guessedWordsRow = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
                <h3 className="title">Guessed Words</h3>
                <table className='table'>
                    <thead className="table__head">
                        <tr><th>Guess</th><th>Matching letters</th></tr>
                    </thead>
                    <tbody className="table__body">
                        {guessedWordsRow}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessedWord">
            {contents}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords