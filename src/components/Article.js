import React, {Component} from 'react';
import Comments from './Comments.js';
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    render() {
          const {article} = this.props;
          return(
            <div>
              <h3>{article.title}</h3>
              <button onClick={this.props.toggleOpen}>
                {this.props.isOpen? "Close" : "Open"}
              </button>
              {this.getBody()}
            </div>
          )
        }

        getBody() {
          if(!this.props.isOpen) return null
          const {article} = this.props
          return(
              <div>
              <section>{article.text}</section>
               <Comments comments={article.comments} />
               </div>
            )
        }
}

export default toggleOpen(Article)
