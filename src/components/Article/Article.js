import React, {Component} from 'react';
import Moment from 'react-moment';

import Comments from '../Comments.js';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openIs: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({openIs: nextProps.articlesOpenId === nextProps.id})
    }

    render() {
        return (
            <li>
                <h2>{this.props.item.title}</h2>
                <p>
                    <Moment format="YYYY.MM.DD">{this.props.item.date}</Moment>
                </p>
                <button className={(!this.state.openIs) ? 'list-btn-open' : 'list-btn-close'}
                    onClick={() => {
                    if (this.props.articlesOpenId !== this.props.id) {
                        this.props.onClickArticleOpenId(this.props.id);
                    }
                    else {
                        this.setState({
                            openIs: !this.state.openIs
                        })
                    }
                }}>{this.state.openIs ? 'Close' : 'Open'}</button>
                <p>{this.state.openIs ? this.props.item.text : null}</p>
                {(this.props.item.comments && this.state.openIs) ? <Comments comments={this.props.item.comments}/> : ''}
            </li>
        )
    }
}

export default Article;
