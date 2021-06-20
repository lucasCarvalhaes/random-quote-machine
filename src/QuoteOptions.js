import React from "react"
import NewQuoteButton from "./NewQuoteButton.js"
import ShareLink from "./ShareLink.js"

const inLineStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
}

class QuoteOptions extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div style={inLineStyle}>
                <ShareLink currentQuote={this.props.childProp} />
                <NewQuoteButton getNewQuote={this.props.clickEvent}/>
            </div>
        )
    }
}

export default QuoteOptions