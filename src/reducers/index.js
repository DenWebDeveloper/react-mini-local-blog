import {combineReducers} from 'redux';

import fixtures from './fixtures';
import date from './date';
import authors from './authors';

export default combineReducers({
    fixtures,date,authors
});