import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMain } from '../../actions';
import { Row, Col, Button } from 'antd';

class CityList extends Component {
    componentDidMount() {
        const getMain = this.props.getMain;

        getMain();
    }

    render() {
        const { main } = this.props;
        const technologies = main.technologies;

        if(typeof technologies !== 'undefined') {
            let technologie = technologies.map(technologie =>
                    <Col className="gutter-row" key={technologie}>
                        <Button onClick={() => this.onCurrentMap(technologie)}>{technologie}</Button>
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
    main: state.dates.mainInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMain
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
