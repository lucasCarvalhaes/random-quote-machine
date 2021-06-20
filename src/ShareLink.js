import React from "react"
import { FaTwitterSquare } from 'react-icons/fa'

const a = {
    fontSize: '2.5rem',
    textDecoration: 'none',
    color: 'black',
}

class ShareLink extends React.Component {
    constructor(props) {
        super(props)
        this.tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(this.props.currentQuote)}`
    }

    render() {
        return (
            <div style={{height: '35px'}}>
                <a  id="tweet-quote" style={a} href={this.tweetUrl} target='_blank'>
                    <FaTwitterSquare />
                </a>
            </div>
        )
    }


}

export default ShareLink