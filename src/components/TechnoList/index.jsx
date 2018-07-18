import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stateDetails, getMain } from '../../actions';
import { Row, Col, Button } from 'antd';
import store from '../../store'

class CityList extends Component {
    componentDidMount() {
        const { getMain, stateDetails } = this.props;

        stateDetails();
        getMain();
    }

    onCurrentTech = (current) => {
        const getCurrentDates = this.props.dates;
        let currentTech = getCurrentDates.filter(tech => tech.offerTags.map(index => index === current).includes(true));

        store.dispatch(stateDetails(currentTech));
    };

    render() {
        const { main } = this.props;
        const technologies = main.technologies;

        if(typeof technologies !== 'undefined') {
            let technologie = technologies.map(technologie =>
                    <Col className="gutter-row" key={technologie}>
                        <Button onClick={() => this.onCurrentTech(technologie)}>{technologie}</Button>
                    </Col>
            );

            return (
                <Row>
                    {technologie}
                </Row>
            );
        } else {
            return (
                <h1>
                    Loading...
                </h1>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    dates: state.dates.dates,
    main: state.dates.mainInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    stateDetails,
    getMain
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
