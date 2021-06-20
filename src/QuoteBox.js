import React from "react"
import Quote from './Quote.js'
import QuoteOptions from "./QuoteOptions.js"

const inLineStyle = {
    width: '600px',
    height: 'auto',
    borderRadius: '5px',
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const styleOptions = {
    marginTop: '2rem'
}

const styleContainer = { margin: '3rem 3rem' }

class QuoteBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quotes: [],
            currentQuote: {}
        }

        this.getQuotes = this.getQuotes.bind(this)
        this.getNewQuote = this.getNewQuote.bind(this)
    }

    async componentDidMount() {
        await this.getQuotes()
        this.getNewQuote()
    }

    getQuotes = async () => {
        const resp = await fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=famous", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "2da5a6671fmsh3a8114bd43d0234p100868jsnaff2ec7318bf",
                "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com"
            }
        })
        if (resp.status >= 400) {
            console.log('Deu erro')
        }

        this.setState({
            quotes: await resp.json()
        })
        console.log(this.state.quotes)   
    }

    getNewQuote = () => {
        const random = Math.round(Math.random() * (this.state.quotes.length - 1))
        this.setState({
            currentQuote: this.state.quotes[random]
        })
    }

    render() {
        console.log(this.state.quotes)
        return (
            <div style={inLineStyle} id="quote-box">
                <div style={styleContainer}>
                    <Quote currentQuote={this.state.currentQuote}></Quote>
                    <QuoteOptions childProp={this.state.currentQuote} clickEvent={this.getNewQuote} style={styleOptions} />
                </div>
            </div>
        )
    }
}

export default QuoteBox

// const objTeste = [
//     {
//         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
//         "author": "Ayn Rand",
//         "category": "Famous"
//     },
//     {
//         "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
//         "author": "A. J. Liebling",
//         "category": "Famous"
//     }, 
// ]