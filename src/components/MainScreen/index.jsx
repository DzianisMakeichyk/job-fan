import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getApi, stateDetails } from '../../actions';
import OfferList from '../OfferList'
import CityList from '../CityList'
import TechnoList from '../TechnoList'
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

        const { offer } = this.props;

        let newStateDates = dates.map(state => Object.assign(state, addDetails, {slug: `${state.companyAddress[0].city}-${state.companyName}-${state.offerName}`.split(' ').join('-').toLowerCase()}));

        //Dispatch
        store.dispatch(stateDetails(newStateDates));

        return (
            <div>
                <CityList />
                <TechnoList />
                <OfferList />
            </div>
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