import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux';


class MultiSelectField extends Component {
    constructor() {
        super();

        this.state = {
            value: [],
        }
    }


    handleSelectChange(value) {
        this.setState({value});
        this.props.dispatch({
            type: 'UPDATE_SELECTED_AUTHORS',
            author: value,
        })
    }

    uniqueArray(arr) {
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
            let str = arr[i].value;
            obj[str] = arr[i];
        }
        return Object.values(obj);
    };

    render() {
        const authors = this.props.articles.map(item => {
            return {label:item.author, value:item.author.toLowerCase()}
        });
        return (
            <Select
                closeOnSelect={false}
                multi
                onChange={this.handleSelectChange.bind(this)}
                options={this.uniqueArray(authors)}
                placeholder="Виберіть ваших улюблених авторів"
                removeSelected={true}
                simpleValue
                value={this.state.value}
            />
        )
    }
}

export default connect(
    state => ({
        articles: state.fixtures
    }),dispatch => ({
        dispatch
    })
)(MultiSelectField);

