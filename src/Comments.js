import React, {Component} from 'react';


export default class Comments extends Component {
    constructor(props) {
      super(props);

      this.state = {
          isOpen: true
      }
    }

    render() {
      const {comments} = this.props;
      if(!comments) return null

      return(
        <div>
      <button onClick={this.toggleOpen}>
          {this.state.isOpen? "Open commeents" : "Close commeents"}
      </button>
      {this.getBody()}</div>
      )
    }

    getBody() {
        const {comments} = this.props;
      if(this.state.isOpen) return null
      const commentElement = comments.map(comment => <li key={comment.id}>{comment.text}</li>)
      return(
        <ul>
            {commentElement}
        </ul>)
    }

    toggleOpen = (e) => {
      e.preventDefault()
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
}
