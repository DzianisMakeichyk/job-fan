import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
import { getApi } from '../../actions';
import { Row } from 'antd';
import Offer from '../Offer'

class Board extends Component {
    componentDidMount() {
        const getApi = this.props.getApi;

        getApi();
    }

    render() {
        const offers = this.props.dates;

        return (
            <Row>
                {offers.map(offer => <Offer key={offer.slug} offer={offer} />)}
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    dates: state.dates.dates,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getApi
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Board);
