import { combineReducers } from 'redux';

import dates from './reducer';

const rootReducer = combineReducers({
    dates,
});

export default rootReducer;
