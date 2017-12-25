import React, {Component} from 'react';
import Comments from './Comments.js';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
          }
        }
        render() {
          const {article} = this.props;
          const {isOpen} = this.state;
          return(
            <div>
              <h3>{article.title}</h3>
              <button onClick={this.toggleOpen}>
                {isOpen? "Close" : "Open"}
              </button>
              {this.getBody()}
            </div>
          )
        }

        getBody() {
          if(!this.state.isOpen) return null
          const {article} = this.props
          return(
              <div>
              <section>{article.text}</section>
               <Comments comments={article.comments} />
               </div>
            )
        }

        toggleOpen = (e) => {
          e.preventDefault()
          this.setState({
            isOpen: !this.state.isOpen
          })
        }
}
