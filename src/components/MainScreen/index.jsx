import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stateDetails } from '../../actions';
import OfferList from '../OfferList'

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDispatch: true
        };
    }
    componentDidMount() {
        const stateDetails = this.props.stateDetails;

        stateDetails();
    }

    render() {
        const stateDates = this.props.stateDates;
        const store = this.props.store;
        let addDetails = {
            isHover: false,
            isClick: false
        };

        if(stateDates && this.state.startDispatch) {
            let newStateDates = stateDates.map(state => Object.assign(state, addDetails));
            //Dispatch
            store.dispatch(stateDetails(newStateDates));
            this.state.startDispatch = false;

            console.log(this.props.stateDates)
        }

        return (
            <OfferList />
        );
    }
}

const mapStateToProps = (state) => ({
    stateDates: state.dates.stateDates
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    stateDetails
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);