import React, {Component} from 'react'

import Article from './Article/Article';

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articlesOpenId: undefined
        }
    }

    onClickArticleOpenId(id) {
        this.setState({articlesOpenId: id});
    }

    render() {
        return (
            <ul>
                {this.props.articles.map((item, index) => {
                    return (
                        <Article
                            item={item}
                            key={index}
                            id={index}
                            articlesOpenId={this.state.articlesOpenId}
                            onClickArticleOpenId={this.onClickArticleOpenId.bind(this)}/>
                    )
                })}
            </ul>
        )
    }
}

export default Articles;