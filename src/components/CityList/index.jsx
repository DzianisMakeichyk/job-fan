import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMain } from '../../actions';
import { Row, Col, Button } from 'antd';
import update from 'react-addons-update';
import store from '../../store'

class CityList extends Component {
    componentDidMount() {
        const getMain = this.props.getMain;

        getMain();
    }

    onCurrentMap = (current) => {
        const getCurrentMain = this.props.main;
        const currentLocation = getCurrentMain.cities[0][current][0];
        const newCurrentCenterMap = update(getCurrentMain, {currentCenterMap: {$apply: () => { return currentLocation }}});

        store.dispatch(getMain(newCurrentCenterMap));
    };

    render() {
        const { main } = this.props;
        const cities = main.cities;

        if(typeof cities !== 'undefined') {
            let city = cities.map(cities =>
                Object.keys(cities).map(city =>
                    <Col className="gutter-row" key={city}>
                        <Button onClick={() => this.onCurrentMap(city)}>{city}</Button>
                    </Col>
                )
            );

            return (
                <Row>
                    {city}
                </Row>
            );
        } else {
            return (
                <p>
                    Loading...
                </p>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    main: state.dates.mainInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMain
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
