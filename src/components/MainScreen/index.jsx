import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getApi, stateDetails } from '../../actions';
import OfferList from '../OfferList'

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDispatch: true
        };
    }
    componentDidMount() {
        const getApi = this.props.getApi;

        getApi();
    }

    render() {
        const dates = this.props.dates;
        const store = this.props.store;
        let addDetails = {
            isHover: false,
            isClick: false
        };

        // if(dates && this.state.startDispatch) {
            let newStateDates = dates.map(state => Object.assign(state, addDetails));
            //Dispatch
            store.dispatch(stateDetails(newStateDates));
            this.state.startDispatch = false;

            console.log('--- SPACE ---');
            console.log(this.props.dates)
        // }

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