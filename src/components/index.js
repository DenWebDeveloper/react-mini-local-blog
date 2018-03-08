import React,{Component} from 'react';

import {articles} from '../fixtures'
import Articles from './Articles';
import Calendar from './Calendar/Calendar.js';

class App extends Component{
    render() {
        return (
            <div>
                <Articles articles={articles}/>
                <Calendar/>
            </div>
        )
    }
}

export default App;