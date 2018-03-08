import React, {Component} from 'react';

import Comment from './Comment';

class Comments extends Component {
    render() {
        const {comments} = this.props;
        return (
            <ul>
                {comments.map((item, index) => {
                    return <Comment item={item} key={index}/>
                })}
            </ul>
        )
    }
}

export default Comments
