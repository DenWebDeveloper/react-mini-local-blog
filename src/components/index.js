import React,{Component} from 'react';

import {articles} from '../fixtures'
import Articles from './Articles';

class App extends Component{
    render() {
        return (
            <div>
                <Articles articles={articles}/>
            </div>
        )
    }
}

export default App;