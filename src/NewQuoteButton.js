import React from "react"

const inLineStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer'
}

class NewQuoteButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="new-quote">
                <button onClick={this.props.getNewQuote} style={inLineStyle}>New Quote</button>
            </div>
        )
    }


}

export default NewQuoteButton