import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
// import { save, load } from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Row, Col } from 'antd'
import rootReducer from '../rootReducer'
import MainScreen from './MainScreen'
import OfferDetails from './OfferDetails'
import GoogleMap from './GoogleMaps'

import 'antd/dist/antd.css';

const middleware = [logger, thunk];
const store = createStore(
    rootReducer,
    // load(),
    composeWithDevTools(applyMiddleware( ...middleware)),
    // composeWithDevTools(applyMiddleware( ...middleware, save())),
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Row>
                <Col xs={24} lg={12}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={() => <MainScreen store={store}/>} />
                            <Route exact path="/:slug" component={OfferDetails} />
                        </Switch>
                    </Router>
                </Col>
                <Col xs={24} lg={12}>
                    <GoogleMap />
                </Col>
            </Row>
        </Provider>
    );
  }
}

export default App;
