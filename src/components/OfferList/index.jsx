import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
import { stateDetails } from '../../actions';
import { Row } from 'antd';
import Offer from '../Offer'

class Board extends Component {
    componentDidMount() {
        const { stateDetails } = this.props;

        stateDetails();
    }

    render() {
        const offers = this.props.dates;

        console.log(this.props)

        let offer = offers.map(offer => <Offer key={offer.slug} offer={offer} />);

        return (
            <Row>
                {offer}
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    dates: state.dates.dates,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    stateDetails
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Board);
