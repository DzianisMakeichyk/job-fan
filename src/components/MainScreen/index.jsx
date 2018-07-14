import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getApi, stateDetails } from '../../actions';
import OfferList from '../OfferList'
import store from '../../store'

class MainScreen extends Component {
    componentDidMount() {
        const getApi = this.props.getApi;

        getApi();
    }

    render() {
        const dates = this.props.dates;
        let addDetails = {
            isHover: false,
            isClick: false
        };
        let newStateDates = dates.map(state => Object.assign(state, addDetails));

        //Dispatch
        store.dispatch(stateDetails(newStateDates));

        return (
            <OfferList />
        );
    }
}

const mapStateToProps = (state) => ({
    dates: state.dates.dates
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getApi,
    stateDetails
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);