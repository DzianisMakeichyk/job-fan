import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
import { stateByGuidelines } from '../../actions';
import { Row } from 'antd';
import Offer from '../Offer'

class Board extends Component {
    componentDidMount() {
        const { stateByGuidelines } = this.props;

        stateByGuidelines();
    }

    render() {
        const { details } = this.props;

        console.log('Details');
        console.log(this.props);

        if(typeof details !== 'undefined') {
            let offer = details.map(offer => <Offer key={offer.slug} offer={offer} />);

            return (
                <Row>
                    {offer}
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
    details: state.dates.guidelineDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    stateByGuidelines
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Board);
