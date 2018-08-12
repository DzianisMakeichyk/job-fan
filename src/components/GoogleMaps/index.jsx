import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMapReact from 'google-map-react';
import { getMain, stateByGuidelines } from '../../actions';
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
        const { stateByGuidelines, getMain } = this.props;

        getMain();
        stateByGuidelines();
    }

    initGeocoder = ({ maps }) => {
        const geocoder = new maps.Geocoder();
        const { details } = this.props;

        // console.log(details)

        details.map((index) => {
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
        const { main, details } = this.props;
        const { zoom, coords } = this.state;
        const key = ApiKey.GoogleMapApiKey;

        // console.log(details)


        if(details) {
            return (
                <div className="googleMap">
                    <GoogleMapReact
                        bootstrapURLKeys={{key}}
                        center={main.currentCenterMap}
                        defaultZoom={zoom}
                        onGoogleApiLoaded={this.initGeocoder}
                        yesIWantToUseGoogleMapApiInternals={true}
                    >
                        {coords.map((marker, i) => {
                            return (
                                <Marker
                                    key={i}
                                    lat={marker.lat}
                                    lng={marker.lng}
                                    info={details[i]}
                                />
                            )
                        })
                        }
                    </GoogleMapReact>
                </div>
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
    details: state.dates.guidelineDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    stateByGuidelines,
    getMain
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SimpleMap);