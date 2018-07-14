import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { Row, Col } from 'antd'
import MainScreen from './MainScreen'
import OfferDetails from './OfferDetails'
import GoogleMap from './GoogleMaps'
import store from '../store'

import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Row>
                <Col xs={24} lg={12}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={MainScreen} />
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
