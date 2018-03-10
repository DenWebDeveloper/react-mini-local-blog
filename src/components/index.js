import React, {Component} from 'react';
import {connect} from 'react-redux';

import Articles from './Articles';
import MultiSelectField from './Filters/MultiSelectField';
import Calendar from './Filters/Calendar';


class App extends Component {

    onClickAddComment() {
        const comment = {
            "id": "56c782f18990ecf954f6e027",
            "date": "2018-03-09T15:03:23.000Z",
            "author":"Dolly",
            "title": "Dummy TEST",
            "text": "Commodo qui incididunt ex ut ea nulla et eu aliquip duis. Aute deserunt excepteur ullamco fugiat sunt aliquip exercitation do sint incididunt. Amet consectetur sint irure reprehenderit fugiat amet mollit. In commodo mollit ullamco cillum pariatur eiusmod cillum aute mollit. Culpa non sint eiusmod ad dolor velit dolore voluptate do adipisicing. Cupidatat sint est magna officia qui magna eu elit qui excepteur fugiat duis ex labore.\n\nAliquip veniam ad reprehenderit mollit exercitation id enim ut exercitation. Esse irure ipsum minim laborum reprehenderit irure ut. Tempor excepteur nisi nulla nostrud amet id cillum. Sint velit sint officia aliqua sint quis deserunt.\n\nAliquip dolor cillum deserunt enim nulla dolor amet irure cupidatat commodo laboris id aliqua. Labore aliqua adipisicing Lorem id adipisicing. Ad cupidatat et do anim ex commodo elit magna ad consequat. Nostrud sit eu laborum ut consequat fugiat aute culpa. Lorem tempor quis sunt ad consequat excepteur est. Enim voluptate cillum Lorem ex fugiat ea qui. Irure aute magna dolore eiusmod minim non ad anim dolore sint et.",
            "comments": [
                {
                    "id": "qwerqwer",
                    "user": "Gilliam Underwood",
                    "text": "11Velit anim deserunt elit velit est fugiat duis eiusmod eu do incididunt ut tempor voluptate. Officia dolor aliqua id anim mollit pariatur id commodo. Laborum minim non ut aliquip commodo est consectetur. Mollit eu aliqua tempor est nulla ullamco irure. Sit non amet et eiusmod cillum ex cillum anim incididunt ad laboris mollit. Sunt quis incididunt elit ea qui non ullamco aliquip consequat voluptate eiusmod est. Irure laboris amet culpa sit aliquip."
                },
                {
                    "id": "lkjhsdlfkg",
                    "user": "Dolly Franklin",
                    "text": "22Aliquip id nostrud adipisicing irure. Labore reprehenderit ea ex officia ullamco incididunt consequat elit amet quis commodo. Fugiat amet veniam cillum ut aliquip velit est esse minim fugiat eiusmod sint. Commodo ea in culpa deserunt."
                }
            ]
        };

        this.props.dispatch({type: 'ADD_COMMENT', comment: comment})
    }

    onClickRemoveLastComment() {
        this.props.dispatch({type: 'REMOVE_COMMENT'})
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickAddComment.bind(this)}>TEST ADD COMMENT</button>
                <button onClick={this.onClickRemoveLastComment.bind(this)}>TEST REMOVE LAST COMMENT</button>
                <MultiSelectField/>
                <Calendar/>
                <Articles/>
            </div>
        )
    }
}

export default connect(
    dispatch => ({
        dispatch
    })
)(App);