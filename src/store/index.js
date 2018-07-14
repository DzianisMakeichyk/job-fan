import { applyMiddleware, createStore } from 'redux'
// import { save, load } from 'redux-localstorage-simple';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../rootReducer'

const middleware = [logger, thunk];

const store = createStore(
    rootReducer,
    // load(),
    composeWithDevTools(applyMiddleware( ...middleware)),
    // composeWithDevTools(applyMiddleware( ...middleware, save())),
);

export default store;