import React from "react"

const quoteStyle = { fontSize: '1.5rem' }

const authorStyle = { fontSize: '1.2rem', textAlign: 'end', marginTop: '0.5rem', marginBottom: '2rem'}

const inLineStyle = {
    width: '100%',
    textAlign: 'center',
}

class Quote extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.currentQuote)
        const quote = this.props.currentQuote['quote']
        const author = this.props.currentQuote['author']
        
        return ( 
            <div style={inLineStyle} id="text">
                <q style={quoteStyle}>{quote}</q>
                <p style={authorStyle} id="author">- {author}</p>
            </div>
        )
    }
}

export default Quote