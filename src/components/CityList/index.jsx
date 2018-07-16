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

        return (
            <Row>
                {main.map(index =>
                    index.cities.map(cities =>
                        Object.keys(cities).map(city =>
                            <Col className="gutter-row" key={city}>
                                <Button>{city}</Button>
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
