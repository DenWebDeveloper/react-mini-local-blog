import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen'


class Comments extends Component {
    render() {
      const {comments} = this.props;
      if(!comments) return null

      return(
        <div>
      <button onClick={this.props.toggleOpen}>
          {this.props.isOpen? "Close commeents":  "Open commeents"}
      </button>
      {this.getBody()}</div>
      )
    }

    getBody() {
        const {comments} = this.props;
      if(!this.props.isOpen) return null
      const commentElement = comments.map(comment => <li key={comment.id}>{comment.text}</li>)
      return(
        <ul>
            {commentElement}
        </ul>)
    }
}

export default toggleOpen(Comments)
