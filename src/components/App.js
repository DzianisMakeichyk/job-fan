import React, { Component } from 'react';
import { Row, Col } from 'antd';
import GoogleMap from './GoogleMaps'

import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Row>
              <Col span={24} lg={12}>
                  <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                  </p>
              </Col>
              <Col span={24} lg={12}>
                  <GoogleMap />
              </Col>
          </Row>

      </div>
    );
  }
}

export default App;
