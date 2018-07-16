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
        const getCurrentMain = this.props.main[0];
        const newCurrentCenterMap = update(getCurrentMain, {currentCenterMap: {$apply: () => { return current }}});

        // store.dispatch(getMain(newCurrentCenterMap));
    };

    render() {
        const { main } = this.props;

        console.log(main)

        return (
            <Row>
                {main.map(index =>
                    index.cities.map(cities =>
                        Object.keys(cities).map(city =>
                            <Col className="gutter-row" key={city}>
                                <Button onClick={() => this.onCurrentMap(city)}>{city}</Button>
                            </Col>
                        )
                    )
                )}
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    main: state.dates.mainInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMain
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
