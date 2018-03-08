import React, {Component} from "react";

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            openIs: false
        }
    }

    render() {
        return (
            <li>
                <h2>{this.state.openIs ? this.props.item.user : null}</h2>
                <button onClick={() => {
                    this.setState({
                        openIs: !this.state.openIs
                    })
                }}>{this.state.openIs ? 'Close' : 'Open'}</button>
                <p>{this.state.openIs ? this.props.item.text : null}</p>
            </li>
        )
    }
}

export default Comment;