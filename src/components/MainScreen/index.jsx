import React, { Component } from 'react';
import { Row, Col } from 'antd';
import GoogleMap from '../GoogleMaps'
import Board from '../Board'

class MainScreen extends Component {
    render() {
        return (
            <Row>
                <Col xs={24} lg={12}>
                    <Board />
                </Col>
                <Col xs={24} lg={12}>
                    <GoogleMap />
                </Col>
            </Row>
        );
    }
}

export default MainScreen;