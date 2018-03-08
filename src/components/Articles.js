import React, {Component} from 'react'
import moment from 'moment';

import Article from './Article/Article';
import Calendar from './Calendar/Calendar.js';

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articlesOpenId: undefined,
            selectedDate: undefined
        }
    }

    onClickArticleOpenId(id) {
        this.setState({articlesOpenId: id});
    }

   filterArticles(date) {
        this.setState({selectedDate: date});
    }
    shouldComponentUpdate(nextProps, nextState) {
        // Костиль ##{nextState.articlesOpenId !== this.state.articlesOpenId} Прийшлось дописати щоб оновлювався компанент
        return nextState.selectedDate !== this.state.selectedDate || nextState.articlesOpenId !== this.state.articlesOpenId
    }

    renderArticle() {
        return(
            this.props.articles.map((item, index) => {
                console.log(moment(item.date).format('DD.MM.YYYY') === this.state.selectedDate);
                return  (moment(item.date).format('DD.MM.YYYY') === this.state.selectedDate)?<Article
                    item={item}
                    key={index}
                    id={index}
                    articlesOpenId={this.state.articlesOpenId}
                    onClickArticleOpenId={this.onClickArticleOpenId.bind(this)}/>:null
            })
        )
    }

    render() {
        return (
            <div>
                <Calendar filterArticles={this.filterArticles.bind(this)}/>
                <ul>
                    {this.props.articles.map((item, index) => {
                        console.log(moment(item.date).format('DD.MM.YYYY') === this.state.selectedDate);
                        return  (moment(item.date).format('DD.MM.YYYY') === this.state.selectedDate)?<Article
                            item={item}
                            key={index}
                            id={index}
                            articlesOpenId={this.state.articlesOpenId}
                            onClickArticleOpenId={this.onClickArticleOpenId.bind(this)}/>:null
                    })}
                </ul>
            </div>
        )
    }
}

export default Articles;