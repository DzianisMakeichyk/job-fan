import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMapReact from 'google-map-react';
import { stateDetails, getMain } from '../../actions';
import ApiKey from '../../keys/apiKeys';
import Marker from './Marker'
import './style.css'

class SimpleMap extends Component {
    state = {
        coords: [],
        isMapLoad: false,
        zoom: 11

    };

    componentDidMount() {
        const stateDetails = this.props.stateDetails;
        const getMain = this.props.getMain;

        getMain();
        stateDetails();
    }

    initGeocoder = ({ maps }) => {
        const geocoder = new maps.Geocoder();
        const dates = this.props.dates;

        dates.map((index) => {
            const city = index.companyAddress[0].city;
            const address = index.companyAddress[1].address;

            return geocoder.geocode({ 'address': `${city} ${address}`}, (results, status) => {
                if (status === 'OK') {
                    const thisCoords = results[0].geometry.location.toJSON();
                    const coords = [thisCoords, ...this.state.coords];

                    this.setState({
                        coords,
                        isMapLoad: true
                    })

                } else {
                    console.log('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    };

    render() {
        const props = this.props;
        const state = this.state;
        const key = ApiKey.GoogleMapApiKey;

        return (
            <div className="googleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{key}}
                    center={props.main.currentCenterMap}
                    defaultZoom={state.zoom}
                    onGoogleApiLoaded={this.initGeocoder}
                    yesIWantToUseGoogleMapApiInternals={true}
                >
                    {state.coords.map((marker, i) => {
                        return (
                            <Marker
                                key={i}
                                lat={marker.lat}
                                lng={marker.lng}
                                info={props.dates[i]}
                            />
                        )
                    })
                }
                </GoogleMapReact>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dates: state.dates.dates,
    main: state.dates.mainInfo
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    stateDetails,
    getMain
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SimpleMap);