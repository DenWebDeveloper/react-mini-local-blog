import React, {Component} from 'react'
import {connect} from 'react-redux';
import moment from 'moment';
import Transition from 'react-transition-group/Transition';

import Article from './Article/Article';

class Articles extends Component {
    constructor() {
        super();

        this.state = {
            articlesOpenId: undefined,
            selectedDate: undefined,
            articlesList: [],
        }
    }

    onClickArticleOpenId(id) {
        this.setState({articlesOpenId: id});
    }

    filterArticles(date) {
        this.setState({selectedDate: date});
    }

/*    shouldComponentUpdate(nextProps, nextState) {
        // Костиль ##{nextState.articlesOpenId !== this.state.articlesOpenId} Прийшлось дописати щоб оновлювався компанент
        return nextState.selectedDate !== this.state.selectedDate || nextState.articlesOpenId !== this.state.articlesOpenId
    }*/

    renderArticle() {
        let findArticles = this.props.articles.map((item, index) => {
            if (moment(item.date).format('DD.MM.YYYY') === this.state.selectedDate) {
                return <Article
                    item={item}
                    key={index}
                    id={index}
                    articlesOpenId={this.state.articlesOpenId}
                    onClickArticleOpenId={this.onClickArticleOpenId.bind(this)}/>
            }
        })
        if (findArticles[0]) {
            return findArticles
        } else {
            return <p>Cтатті не знайденні</p>
        }
    }

    articleAnimation() {
        const defaultStyle = {
            transition: `opacity 300ms ease-in-out`,
            opacity: 0,
        }

        const transitionStyles = {
            entering: {opacity: 0},
            entered: {opacity: 1},
        };

        const Fade = ({in: inProp}) => (
            <Transition in={inProp} timeout={300}>
                {(state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        {this.renderArticle()}
                    </div>
                )}
            </Transition>);
        return Fade
    }

    componentWillReceiveProps(nextProps) {
        this.setState({articlesList: nextProps.articles})
    }

    componentWillMount() {
        this.state.articlesList = this.props.articles;
    }

    render() {
        return (
            <div>
                <ul>
                    {/*{this.renderArticle()}*/}
                    {this.state.articlesList.map((item, index) => {
                        return (
                            <Article
                                item={item}
                                key={index}
                                id={index}
                                articlesOpenId={this.state.articlesOpenId}
                                onClickArticleOpenId={this.onClickArticleOpenId.bind(this)}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        articles: state.fixtures
    })
)(Articles);